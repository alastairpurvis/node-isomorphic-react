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
import s from './SubFooter.scss';
import cx from 'classnames';
import Link from '../../common/Link';
import Container from '../../common/Container';
import Row from '../../common/Row';
import Separator from '../Separator';
import IconFacebook from '../Icon/Icons/SocialNetworks/Facebook.jsx';
import IconInstagram from '../Icon/Icons/SocialNetworks/Instagram.jsx';
import IconTwitter from '../Icon/Icons/SocialNetworks/Twitter.jsx';
import { SIZE_SMALL as ICON_SIZE } from '../../../../constants/icon';

@withStyles(s)
class SubFooter extends Component {

    render() {
        return (
            <div className={s.root}>
                <Separator />
                <Container>
                    <div className={s.unit}>
                        <Container>
                            <Row spaceBetween>
                                <div className={cx(s.row, s.equal, s.contentLeft)}>
                                    <div className={cx(s.row, s.equal, s.contentLeft)}>
                                        <h3>
                                            Connect with us
                                        </h3>
                                    </div>
                                    <div className={cx(s.row, s.equal, s.contentLeft)}>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to="https://www.facebook.com"
                                        >
                                            <IconFacebook color="gray" size={ICON_SIZE} />
                                        </Link>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to="https://www.instagram.com"
                                        >
                                            <IconInstagram color="gray" size={ICON_SIZE} />
                                        </Link>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to="https://www.twitter.com"
                                        >
                                            <IconTwitter color="gray" size={ICON_SIZE} />
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx(s.row, s.equal,  s.contentLeft)}>
                                <h3>
                                    Check out the Skin Moderne Blog
                                </h3>
                                Skincare tips and news from your friends at Skin Moderne.
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }

}

export default SubFooter;
