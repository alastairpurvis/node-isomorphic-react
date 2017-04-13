import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import cx from 'classnames';
import Link from '../../common/Link';
import Container from '../../common/Container';
import Row from '../../common/Row';
import IconFacebook from '../Icon/Icons/SocialNetworks/Facebook.jsx';
import IconInstagram from '../Icon/Icons/SocialNetworks/Instagram.jsx';
import IconTwitter from '../Icon/Icons/SocialNetworks/Twitter.jsx';
import { SIZE_SMALL as ICON_SIZE } from '../../../../constants/icon';

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
                <Container fullWidth>
                            <Row weak spaceBetween>
                                <div className={cx(s.row, s.equal, s.contentLeft)}>
                                    <span className={s.copyright}>
                                        © 2017 Skin Moderne Inc.
                                    </span>
                                    <div className={s.gap}>|</div>
                                    {this.renderLinks()}
                                </div>
                                <div className={cx(s.row,  s.contentRight)}>
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
                            </Row>
                </Container>
            </div>
        );
    }

}

export default Footer;
