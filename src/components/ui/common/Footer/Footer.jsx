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
