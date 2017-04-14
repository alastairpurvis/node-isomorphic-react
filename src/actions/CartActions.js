import actionTypes from '../constants/actionTypes';
import service from '../services/api';
import Promise from 'bluebird';

export default {
    create(context, params) {
        return service({
            path: '/carts',
            method: 'POST',
            params
        })
            .then(data => {
                Promise.all([
                    context.executeAction('session/addCart', data),
                    context.dispatch(actionTypes.CART_CREATE, data)
                ]);

                return data;
            })
    },

    delete(context, { id }) {
        return service({
            path: `/carts/${id}`,
            method: 'DELETE'
        })
            .then(data => Promise.all([
                context.executeAction('session/deleteCart'),
                context.dispatch(actionTypes.CART_DELETE, data)
            ]));
    },

    clear(context) {
        return context.dispatch(actionTypes.CART_CLEAR);
    },

    get(context, { id }) {

        return service({
            path: `/carts/${id}`,
            method: 'GET'
        })
            .then(data => context.dispatch(actionTypes.CART_LOAD, data))
    },

    addProduct(context, params) {
        const numberId = Math.random(9999).toString(36).slice(2);
        context.dispatch(actionTypes.CART_PRODUCT_ADD, {
                product: params.product,
                cart_id: params.id,
                id: numberId,
                product_id: params.product.id,
                variant_id: params.variant_id,
                price: params.product.price,
                quantity: 1,
                price_total: params.product.price_total
            })

        let fakeData = {cart_id: params.id, id: numberId, price_total: params.product.price};

        return service({
            path: `/carts/${params.id}/items`,
            method: 'POST',
            params: {
                cart_id: params.id,
                product_id: params.product.id,
                variant_id: params.variant_id
            }
        })
        .then(
            function (data) {
                context.dispatch(actionTypes.CART_PRODUCT_REMOVE, fakeData); 
                return data;
            })
        .then(data => context.dispatch(actionTypes.CART_PRODUCT_ADD, {
                product: params.product,
                ...data
            }))
    },

    changeProductCount(context, { cart_id, product_id, variant_id, quantity }) {
        return service({
            path: `/carts/${cart_id}/items`,
            method: 'POST',
            params: {
                product_id,
                variant_id,
                quantity
            }
        })
            .then(data => context.dispatch(actionTypes.CART_ITEM_QUANT_CHANGE, {
                id: data.id,
                quantity
            }));
    },

    removeProduct(context, params) {

        let fakeData = {cart_id: params.id, id: params.productId, price_total: params.price_total};

        context.dispatch(actionTypes.CART_PRODUCT_REMOVE, fakeData)

        return service({
            path: `/carts/${params.id}/items/${params.productId}`,
            method: 'DELETE'
        })
    }
};
