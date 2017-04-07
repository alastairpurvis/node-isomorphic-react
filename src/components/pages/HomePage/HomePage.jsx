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
import Container from '../../ui/common/Container';
import Image from '../../ui/common/Image';
import Hero from '../../ui/common/Hero';
import Row from '../../ui/common/Row';
import Column from '../../ui/common/Column';
import Link from '../../ui/common/Link';
import s from './HomePage.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const title = 'Home';

@withStyles(s)
class HomePage extends Component {
    static pageName = 'home';

    static contextTypes = {
        setTitle: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.context.setTitle(title);
    }

    render() {
        return (
            <div>
                <Row>
                        <Hero src='/images/homepage-hero.jpg' link='/products/all-products' header="Personalized Skincare" subheader="We make awesome, minimalist skincare that will get you laid because guys love a hoe with great skin."
                        button="Shop Now" />
                </Row>
                <Row>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile1.jpg' />
                            <figcaption>
							<h2>Face <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile2.jpg' />
                            <figcaption>
							<h2>Body <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile3.jpg' />
                            <figcaption>
							<h2>Anti <span>Aging</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default HomePage;
