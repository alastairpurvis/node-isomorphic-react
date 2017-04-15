import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductInfo.scss';
import Price from '../../common/Price';
import cx from 'classnames';

const ProductInfo = ({ product, className }) =>
    <section className={className}>
        <div className={cx(s.smartAlign, s.name)}>
            {product.name}
        </div>
        <div className={cx(s.smartAlign, s.sku)}>
            {product.summary}
        </div>
    </section>;

export default withStyles(s)(ProductInfo);
