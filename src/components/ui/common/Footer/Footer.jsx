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
import s from './Footer.scss';
import cx from 'classnames';
import Link from '../../common/Link';
import Container from '../../common/Container';
import Row from '../../common/Row';

@withStyles(s)
class Footer extends Component {

    renderLinks() {
        return (
            <div>
                <Link
                    to="/terms-of-use"
                    key="products"
                    name="Terms of Use"
                    className={s.link}
                    wrapperClassName={s.linkWrapper}
                />
                <Link
                    to="/privacy"
                    key="privacy"
                    name="Privacy"
                    className={s.link}
                    wrapperClassName={s.linkWrapper}
                />
            </div>
        );
    }

    render() {
        return (
            <div className={s.root}>
                <Container>
                    <div className={s.unit}>
                        <Container>
                            <Row spaceBetween>
                                <div className={cx(s.row, s.equal, s.contentLeft)}>
                                    © 2017 <strong>&nbsp;SKIN MODERNE&nbsp;</strong> Inc., All Rights Reserved
                                </div>
                                <div className={cx(s.row,  s.contentLeft)}>
                                    {this.renderLinks()}
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Footer;
