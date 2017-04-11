import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoryNavigation.scss';
import cx from 'classnames';
import Link from '../../common/Link';
import { map } from 'lodash';
import watchStores from '../../../../utils/decorators/watchStores';
import Container from '../../common/Container';
import Row from '../../common/Row';
import Separator from '../Separator';

@withStyles(s)
@watchStores('navigation')
class CategoryNavigation extends Component {
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
        let { navigation } = this.state;
        //navigation.push({to: "/catalog", name: "All Products"});
        const currentNav = this.props.title;
        const activeClass = "active";

        return map(navigation, (link, index) => (
            <Link
                to={link.to}
                key={link.name}
                name={link.name}
                className={cx(s.link, ((currentNav == link.name) ? s[activeClass] : ''))}
                wrapperClassName={s.linkWrapper}
            />
        ));
    }

    render() {
        return (
            <div className={s.root}>
                <Container fullWidth>
                            <Row spaceBetween className={cx(s.row, s.equal, s.contentCenter)}>
                                {this.renderLinks()}
                            </Row>
                </Container>
                <Separator />
            </div>
        );
    }

}

export default CategoryNavigation;
