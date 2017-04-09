import React, { Component, PropTypes as pt } from 'react';
import { COLOR_BLACK } from '../../../../constants/colors';
import { isUndefined, find, isEmpty, map, reduce, includes } from 'lodash';
import s from './Product.scss';
import watchStores from '../../../../utils/decorators/watchStores';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ImageViewer from '../../common/ImageViewer';
import Row from '../../common/Row';
import Column from '../../common/Column';
import Link from '../Link';
import ProductInfo from '../../common/ProductInfo';
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';
import ProductDescription from '../ProductDescription';
import Options from '../Options';
import Button from '../Button';
import Separator from '../Separator';
import IconTriangleRight from '../Icon/Icons/Controls/TriangleRight.jsx';
import Promise from 'bluebird';
import Social from '../SocialNetworks';
import { SIZE_EXTRA_SMALL } from '../../../../constants/icon';
import { routes } from '../../../../config';


@withStyles(s)
@watchStores(
    'products',
    'cart'
)
class Product extends Component {
    static contextTypes = {
        getStore: pt.func.isRequired,
        executeAction: pt.func.isRequired,
        setTitle: pt.func.isRequired,
        onSetMeta: pt.func.isRequired
    };

    static propTypes = {
        slug: pt.string
    };

    state = {
        loadingRecommendedProducts: false,
        showProceedToCheckoutLink: false
    };

    getStoresState() {
        const
            { products } = this.context.getStore('products').getState(),
            { cartId } = this.context.getStore('cart').getState(),
            product = find(products, { slug: this.props.slug });

        if (!isEmpty(product)) {
            this.context.setTitle(product.name);
            this.context.onSetMeta('description', `${product.manufacturer_name} ${product.name} ${product.sku}`);
        }

        return { products, product, cartId };
    }

    componentDidMount() {
        if (!this.hasRecommendedProducts(this.state.product)) {
            this.loadProduct(this.props.slug);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.slug !== nextProps.slug) {
            // Go to recommended product from product page.
            const product = find(this.state.products, { slug: nextProps.slug });

            if (!product) {
                this.loadProduct(nextProps.slug);
            } else {
                this.setState({ product });
            }
        }
    }

    getCart() {
        const { cartId } = this.state;

        if (!cartId) {
            return this.context.executeAction('cart/create');
        } else {
            return Promise.resolve({ id: cartId });
        }
    }

    handleAddProduct = () => {
        const
            { state } = this.optionsRef,
            ids = map(state, option => option.id),
            { product } = this.state,
            variantId = find(product.variants,
                ({ option_value_ids }) => reduce(ids,
                    (memo, id) => memo && includes(option_value_ids, id),
                    true)).id;

        this.getCart()
                .then(data => this.context.executeAction('cart/addProduct', {
                    id: data.id,
                    product,
                    variant_id: variantId
                }))
                .then(() => this.context.executeAction('navigate/to', { url: "/cart" }));
    };

    hasRecommendedProducts(product) {
        return product && !isUndefined(product.recommendedProducts);
    }

    loadProduct(slug) {
        this.context.executeAction('products/getBySlug', { slug });
    }

    renderRecommendedProducts(product) {
        return <RecommendedProducts products={product.recommendedProducts} />;
    }

    render() {
        const { product } = this.state;

        if (!product) {
            return null;
        }

        const description = product.description.split("|");

        return (
            <div>
                <Row className={s.root}>
                    <Column
                        className={s.leftColumn}
                        hasRightMargin
                        alignItems='stretch'
                        flowDirection='bottom'
                    >
                        <ImageViewer className={s.viewer} images={product.images} />
                    </Column>
                    <Column
                        className={s.info}
                        alignItems='stretch'
                        flowDirection='bottom'
                        hasLeftMargin
                    >
                        <ProductInfo product={product} />
                        <Separator className={s.margin} />
                        <ProductDescription text={description[0]} />
                        <Separator className={s.margin} />
                        <Options
                            options={product.options}
                            onCreate={ref => this.optionsRef = ref}
                        />
                        <br/>
                        <Button fat onClick={this.handleAddProduct}>Add to cart</Button>
                        {this.state.showProceedToCheckoutLink && (
                            <Link
                                custom
                                className={s.proceedToCheckout}
                                to={routes.CHECKOUT}
                            >
                                Proceed to checkout
                                &nbsp;
                                <IconTriangleRight size={SIZE_EXTRA_SMALL} />
                            </Link>
                        )}
                    </Column>
                </Row>
                {this.renderRecommendedProducts(product)}
            </div>
        );
    }
}

export default Product;
