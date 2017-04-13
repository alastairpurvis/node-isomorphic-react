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
import IconPhone from '../Icon/Icons/Phone.jsx';
import IconEnvelope from '../Icon/Icons/Envelope.jsx';
import IconSearch from '../Icon/Icons/Search.jsx';
import IconMessenger from '../Icon/Icons/Messenger.jsx';
import { SIZE_Medium as ICON_SIZE } from '../../../../constants/icon';

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
                                    <div className={s.leftColumn}>
                                        <div className={s.helpLinks}>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to=""
                                        >
                                            <IconSearch className={s.iconSVG} color="gray" size={ICON_SIZE} />
                                            FAQ
                                        </Link>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to=""
                                        >
                                            <IconEnvelope className={s.iconSVG} color="gray" size={ICON_SIZE} />
                                            Email
                                        </Link>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to=""
                                        >
                                            <IconPhone className={s.iconSVG} color="gray" size={ICON_SIZE} />
                                            Phone
                                        </Link>
                                        <Link
                                            custom
                                            className={s.icon}
                                            to=""
                                        >
                                            <IconMessenger className={s.iconSVG} color="gray" size={ICON_SIZE} />
                                            Chat
                                        </Link>
                                        </div>
                                        <div className={s.helpNotice}>
                                            We're here Monday - Friday<br />
                                            9am - 5pm PST<br />
                                            hello@skinmoderne.com
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </Column>
                                <Column className={s.rightColumn}
                                        flowDirection='bottom'
                                        hasLeftMargin>
                                <Row weak>
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
