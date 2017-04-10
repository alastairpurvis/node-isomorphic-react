import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import { debounce, isEmpty, reduce } from 'lodash';
import watchStores from '../../../../utils/decorators/watchStores';
import Button from '../../common/Button';
import CartProducts from '../CartProducts';
import IconCartShopping from '../../common/Icon/Icons/CartShopping';
import Separator from '../Separator';
import s from './CartPreview.scss';
import { routes } from '../../../../config';
import { getProductsAmountText } from '../../../../utils/cart.js';
import Link from '../Link';
import { SIZE_NAV } from '../../../../constants/icon';

const MOUSE_DEBOUNCE_TIME = 150;

@withStyles(s)
@watchStores('cart')
class CartPreview extends Component {
    static contextTypes = {
        executeAction: pt.func.isRequired,
        getStore: pt.func.isRequired
    };

    static propTypes = {
        className: pt.string
    };

    state = {
        showCartPopup: false
    };

    getStoresState() {
        const
            { products } = this.context.getStore('cart').getState(),
            productLength = reduce(products, (memo, { quantity }) => memo + quantity, 0);;

        return { products, productLength };
    }

    handleMouseEnterDebounced = debounce(this.handleMouseEnter, MOUSE_DEBOUNCE_TIME);

    handleMouseEnter(showPopup) {
        !isEmpty(this.state.products) && this.setState({ showCartPopup: showPopup });
    }

    renderPopup(count) {
        return (
            <div className={s.popup}>
                <div className={s.title}>
                    <span>Your Cart ({count})</span>
                </div>
                <Separator />
                <CartProducts />
                <Separator />
                <Button
                    wide
                    className={s.checkoutButton}
                    to={routes.CART}
                >
                    Review Cart
                </Button>
            </div>
        );
    }

    render() {
        const
            { products, productLength } = this.state,
            showCartPopup = !isEmpty(products) && this.state.showCartPopup,
            count = reduce(products, (memo, { quantity }) => memo + quantity, 0);

        return (
            <div
                className={cx(s.root, this.props.className)}
                onMouseEnter={this.handleMouseEnterDebounced.bind(this, true)}
                onMouseLeave={this.handleMouseEnterDebounced.bind(this, false)}
            >
            <div>
                <div className={s.wrapper}>
                    <div className={this.props.className}>
                    <Link className={s.cartLink} to={routes.CART} name='Cart'>Cart 
                    <IconCartShopping
                        className={s.cartIcon} 
                        color={s.cartIconColor}
                        size={SIZE_NAV}
                    />
                    <span className={s.cartQty}>{productLength ? '(' + productLength + ')' : ''}</span></Link>
                    </div>
                </div>
            </div>
             {showCartPopup && this.renderPopup(count)}
            </div>
        );
    }
}

export default CartPreview;
