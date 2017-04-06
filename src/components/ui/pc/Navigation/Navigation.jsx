/**
 * MIT License
 *
 * Copyright (c) 2017 Skin Moderne Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../../common/Link';
import { map } from 'lodash';
import watchStores from '../../../../utils/decorators/watchStores';
import Container from '../../common/Container';
import Row from '../../common/Row';

@withStyles(s)
@watchStores('navigation')
class Navigation extends Component {
    static contextTypes = {
        getStore: PropTypes.func.isRequired,
        executeAction: PropTypes.func.isRequired
    };

    static propTypes = {
        children: PropTypes.array
    };

    getStoresState() {
        const { navigation } = this.context.getStore('navigation').getState();

        return {
            navigation
        };
    }

    renderLinks() {
        const { navigation } = this.state;

        return (
            <div>
                <Link
                    to="/products/all-products"
                    key="products"
                    name="Products"
                    className={s.link}
                    wrapperClassName={s.linkWrapper}
                />
                <Link
                    to="/about"
                    key="about"
                    name="About"
                    className={s.link}
                    wrapperClassName={s.linkWrapper}
                />
                <Link
                    to="/learn"
                    key="learn"
                    name="Learn"
                    className={s.link}
                    wrapperClassName={s.linkWrapper}
                />
            </div>
        );
    }

    render() {
        return (
            <div className={s.unit}>
                <Container>
                    <Row spaceBetween>
                        {this.renderLinks()}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Navigation;
