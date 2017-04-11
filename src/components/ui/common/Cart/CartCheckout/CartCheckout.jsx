import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CartCheckout.scss';
import Section from '../../Section';
import Separator from '../../Separator';
import cx from 'classnames';
import watchStores from '../../../../../utils/decorators/watchStores';
import { formatPrice } from '../../../../../utils/money';
import Button from '../../../common/Button';
import { debounce, isEmpty, reduce } from 'lodash';
import { routes } from '../../../../../config';

@withStyles(s)
@watchStores('cart')
class CartCheckout extends Component {
    static contextTypes = {
        getStore: pt.func.isRequired
    };

    getStoresState() {
        const { products, currency, total } = this.context.getStore('cart').getState(), productLength = reduce(products, (memo, { quantity }) => memo + quantity, 0);

        return { currency, total, productLength };
    }

    render() {
        const { products, currency, total, productLength } = this.state,
        count = reduce(products, (memo, { quantity }) => memo + quantity, 0);

        return (
            <div className={s.root}>
                <div className={cx(s.total, s.orderItem)}>
                    <span>You have {productLength} {productLength > 1 ? 'items' : 'item'} in your cart{productLength > 1 ? ': ' + formatPrice(total, currency) : '.'}</span>
                </div>
                <Button 
                    fat
                    className={s.checkoutButton}
                    to={routes.CHECKOUT}
                >
                        Checkout
                </Button>
                <div className={s.notice}>
                    <span>Free standard shipping and free returns on all orders</span>
                </div>
        </div>
        );
    }
}

export default CartCheckout;
