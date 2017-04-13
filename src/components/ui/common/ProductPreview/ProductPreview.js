import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Price from '../Price';
import s from './ProductPreview.scss';
import cx from 'classnames';
import Image from '../Image';
import Link from '../Link';
import { head } from 'lodash';

@withStyles(s)
class ProductPreview extends Component {
    static contextTypes = {
        executeAction: pt.func.isRequired
    };

    static propTypes = {
        product: pt.object,
        onClick: pt.func
    };

    static defaultProps = {
        product: {}
    };

    render() {
        const
            { product } = this.props,
            frontImage = head(product.images);

        return (
            <div className={s.root} id={`product-${product.slug}`}>
                <Link to={`/product/${this.props.product.slug}`}>
                    <Image className="productThumb" src={frontImage && frontImage.url} />
                </Link>
                <header className={s.info}>
                    <Link
                        to={`/product/${this.props.product.slug}`}
                        name={product.name}
                        className={s.title}
                    />
                    <span className={s.summary}>
                      {product.summary}
                    </span>
                    <Price
                        className={cx(s.smartAlign, s.price)}
                        amount={product.price}
                        discountPercentage={product.discount}
                        currency={product.currency}
                    />
                </header>
            </div>
        );
    }
}

export default ProductPreview;
