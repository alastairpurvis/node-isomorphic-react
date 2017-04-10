import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import watchStores from '../../../../utils/decorators/watchStores';
import s from './Checkout.scss';
import IconArrowLeft from '../Icon/Icons/ArrowLeft.jsx';
import Row from '../Row';
import Column from '../Column';
import Section from '../Section';
import Button from '../Button';
import TabsPanel from '../TabsPanel';
import Link from '../Link';
import Tab from '../Tab';
import Form from '../Form';
import DesktopCartTable from '../../pc/CartTable';
import MobileCartTable from '../../mobile/CartTable';
import OrderSummary from '../OrderSummary';
import { routes } from '../../../../config';
import { SIZE_SMALL } from '../../../../constants/icon';
import { COLOR_WHITE } from '../../../../constants/colors';
import { AutoAffix } from 'react-overlays';
import getDeliveryAddressItems from './forms/deliveryAddress';
import getPaymentMethodItems from './forms/payment';
import getLoginItems from './forms/login';
import Image from '../Image';

const
    ORDER_FORM_OFFSET_TOP = 60,
    DELIVERY_TAB_INDEX = 0;

@withStyles(s)
@watchStores(
    'user',
    'cart',
    'navigation'
)
class Checkout extends Component {
    static contextTypes = {
        getStore: pt.func.isRequired,
        executeAction: pt.func.isRequired,
        getUserAgent: pt.func.isRequired
    };

    state = {
        activeTab: DELIVERY_TAB_INDEX,
        orderProcessing: false,
        loginErrors: null,
        orderErrors: null
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !nextState.orderProcessing;
    }

    getStoresState() {
        const
            { backPath } = this.context.getStore('navigation').getState(),
            { products, cartId, cartLoaded } = this.context.getStore('cart').getState(),
            { userInfo: user, isLogged } = this.context.getStore('user').getState();

        return {
            backPath,
            cartId,
            products,
            cartLoaded,
            user,
            isLogged
        };
    }

    getUser({ email, password }) {
        const { user, isLogged } = this.state;

        if (!isLogged) {
            return this.context.executeAction('user/register', {
                email,
                password
            });
        } else {
            return Promise.resolve(user);
        }
    }

    handleDeliveryAddressSubmit = values => {
        const
            { products, cartId } = this.state,
            { email, password, ...contactInfo } = values;

        this.setState({ orderProcessing: true });
        this.getUser({ email, password })
            .then(user => Promise.all([
                this.context.executeAction('user/update', {
                    email,
                    ...contactInfo
                }),
                this.context.executeAction('orders/create', {
                    user,
                    products,
                    cartId,
                    email,
                    ...contactInfo
                })
                    .then(() => this.context.executeAction('navigate/to', { url: routes.CHECKOUT_SUCCESS }))
            ]))
            .catch(error => this.setState({
                orderErrors: error.details.email,
                orderProcessing: false
            }));
    };

    handleLoginSubmit = data => {
        this.context.executeAction('user/login', data)
            .then(() => this.setState({ activeTab: DELIVERY_TAB_INDEX }))
            .catch(error => this.setState({ loginErrors: error.message }));
    };

    handleActiveTabChange = index => {
        this.setState({ activeTab: index });
    };

    renderHeader() {
        return (
            <header className={s.header}>
                <Link
                    name='SKIN MODERNE'
                    wrapperClassName={s.logo}
                    to={routes.HOME}
                >
                    <Image src='/images/logo-white.svg' />
                </Link>
                <nav className={s.nav}>
                    <Link
                        custom
                        className={s.backLink}
                        to='/cart'
                    >
                        <IconArrowLeft size={SIZE_SMALL} />
                        &nbsp;
                        Back to cart
                    </Link>
                </nav>
            </header>
        );
    }

    render() {
        const
            { isLogged, products, cartLoaded, cartId } = this.state,
            { isDesktop, isTablet } = this.context.getUserAgent();

        return (
            <div className={s.root}>
                {isDesktop && this.renderHeader()}
                <Row className={s.container}>
                    <Column
                        hasRightMargin
                        alignItems='stretch'
                        flowDirection='bottom'
                        className={s.leftColumn}
                    >
                        <Section title='Shipping Address' hasSeparator>
                            <TabsPanel
                                activeTab={this.state.activeTab}
                                onChange={this.handleActiveTabChange}
                            >
                                <Tab title={!isLogged ? 'First time here?' : 'Contact information'}>
                                    <Form
                                        name='deliveryAddress'
                                        items={getDeliveryAddressItems(this)}
                                        showLabels
                                        labelsPosition={isDesktop ? 'left' : 'top'}
                                        onSubmit={this.handleDeliveryAddressSubmit}
                                    />
                                </Tab>
                                {!isLogged && <Tab title='Login'>
                                    <Form
                                        items={getLoginItems(this, s)}
                                        showLabels
                                        labelsPosition={isDesktop ? 'left' : 'top'}
                                        onSubmit={this.handleLoginSubmit}
                                        errors={this.state.errors}
                                    />
                                </Tab>}
                            </TabsPanel>
                        </Section>
                        <Section title='Payment' hasSeparator>
                            <Form
                                items={getPaymentMethodItems(this)}
                            />
                        </Section>
                    </Column>
                    <Column
                        alignItems='stretch'
                        className={s.rightColumn}
                        flowDirection='bottom'
                        hasLeftMargin
                    >
                        <AutoAffix viewportOffsetTop={ORDER_FORM_OFFSET_TOP}>
                            <div className={s.orderForm}>
                                <OrderSummary />
                                <Button
                                    form='deliveryAddress'
                                    fat
                                    isSubmit
                                >
                                    Submit Order
                                </Button>
                            </div>
                        </AutoAffix>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default Checkout;
