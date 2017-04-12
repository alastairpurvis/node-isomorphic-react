import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SubFooter.scss';
import cx from 'classnames';
import Link from '../../common/Link';
import Container from '../../common/Container';
import Row from '../../common/Row';
import Column from "../../common/Column";
import Form from '../../common/Form';
import Separator from '../Separator';
import Button from '../Button';
import IconFacebook from '../Icon/Icons/SocialNetworks/Facebook.jsx';
import IconInstagram from '../Icon/Icons/SocialNetworks/Instagram.jsx';
import IconTwitter from '../Icon/Icons/SocialNetworks/Twitter.jsx';
import { SIZE_SMALL as ICON_SIZE } from '../../../../constants/icon';

@withStyles(s)
class SubFooter extends Component {

    render() {
        const newsletterSignup = [{ name: 'email',
                                    type: 'email',
                                    title: 'E-mail',
                                    placeholder: 'Your email here' }];

        return (
            <div className={s.root}>
                <Container fullWidth>
                            <Row weak spaceBetween>
                                <Column className={s.info}
                                        alignItems='stretch'
                                        flowDirection='bottom'
                                        hasRightMargin>
                                    <div>
                                        <h3>
                                            Connect with us
                                        </h3>
                                    </div>
                                    <div>
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
                                </Column>
                                <Column className={s.info}
                                        alignItems='stretch'
                                        flowDirection='bottom'
                                        hasLeftMargin>
                                <Row weak >
                                <h3>
                                    Sign up for our newsletter
                                </h3>
                                </Row>
                                <Row weak >
                                Skincare tips and news from your friends at Skin Moderne.
                                </Row>
                                <Row weak className={s.newsletterForm}>
                                <Form
                                    name='newsletter'
                                    items={newsletterSignup}
                                    onSubmit={this.handleSubmit}
                                />
                                <Button
                                    form='newsletter'
                                    fat
                                    isSubmit
                                >
                                    Sign up
                                </Button>
                                </Row>
                                </Column>
                            </Row>
                </Container>
            </div>
        );
    }

}

export default SubFooter;
