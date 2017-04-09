import actionTypes from '../constants/actionTypes';
import service from '../services/api';
import Promise from 'bluebird';
import { generateOrderNumber } from '../utils/orders';
import { map, head } from 'lodash';

export default {
    create(context, {
        user,
        products,
        cartId,
        ...contactInfo
    }) {
        context.executeAction('progress/show', 'order-create');

        return service({
            path: '/orders',
            method: 'POST',
            params: {
                account_id: user.id,
                cart_id: cartId,
                order_number: generateOrderNumber(),
                items: map(products, product => ({ product_id: product.product_id })),
                ...contactInfo
            }
        })
            .then(({ order_number, grand_total, shipment_price, sub_total }) => {
                const params = {
                    type: 'order',
                    data: {
                        order_number,
                        grand_total,
                        sub_total,
                        shipment_price,
                        products: map(products, ({ product, price, variant }) => ({
                            sku: product.sku,
                            image: head(product.images),
                            manufacturer_name: product.manufacturer_name || '',
                            name: product.name,
                            price,
                            variant
                        })),
                        ...contactInfo
                    }
                };

                context.executeAction('email/send', { email: user.email, ...params });
                context.executeAction('email/sendInvoice', params);

                return Promise.all([
                    context.executeAction('cart/delete', { id: cartId }),
                    context.dispatch(actionTypes.ORDER_CREATE, { order_number, grand_total, sub_total, shipment_price })
                ]);
            })
            .finally(() => context.executeAction('progress/hide', 'order-create'));
    },

    list(context, params) {
        context.executeAction('progress/show', 'orders-list');

        return service({
            path: `/orders`,
            params: {
                account_id: params.accountId,
                limit: 16
            }
        })
            .then(data => {
                context.dispatch(actionTypes.ORDER_LOAD, data);
                return data;
            })
            .finally(() => context.executeAction('progress/hide', 'orders-list'));
    }
};
