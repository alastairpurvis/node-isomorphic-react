import React, { Component, PropTypes as pt } from 'react';
import Header from '../../ui/pc/Header';
import HeaderMobile from '../../ui/mobile/Header';
import Navigation from '../../ui/mobile/Navigation';
import Slide from '../../ui/common/Slide';
import Progress from '../../ui/common/Progress';
import SubFooter from '../../ui/common/SubFooter';
import Footer from '../../ui/common/Footer';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BaseLayout.scss';
import Mask from '../../ui/common/Mask';
import cx from 'classnames';

const
    MASK_OPACITY = 0.2,
    FULL_SCREEN_WIDTH = '-100vw';

@withStyles(s)
class ComputerLayout extends Component {
    static contextTypes = {
        getCookie: pt.func.isRequired,
        setCookie: pt.func.isRequired
    };

    static propTypes = {
        hasFooter: pt.bool,
        showProgress: pt.bool,
        showBackIcon: pt.bool,
        children: pt.node
    };

    static defaultProps = {
        hasFooter: true,
        showProgress: false,
        showBackIcon: false
    };

    state = {
        menuShowed: false
    };

    handleMenuClick = () => {
        this.showMenu();
    };

    handleNavigationClick = () => {
        this.hideMenu();
    };

    showMenu() {
        this.setState({ menuShowed: true });
        this.disableBodyScroll();
    }

    hideMenu() {
        this.setState({ menuShowed: false });
        this.enableBodyScroll();
    }

    disableBodyScroll() {
        let [body] = document.getElementsByTagName('body');

        body.setAttribute('style', 'overflow: hidden;');
    }

    enableBodyScroll() {
        let [body] = document.getElementsByTagName('body');

        body.setAttribute('style', 'overflow: initial;');
    }

    render() {
       const
            { menuShowed } = this.state;

        return (
            <div>
                {this.props.showProgress && <Progress />}
                <Header />
                <Mask
                    className={s.mask}
                    visible={menuShowed}
                    opacity={MASK_OPACITY}
                />
                <HeaderMobile
                    className={cx(s.header, s.fixed)}
                    showBackIcon={this.props.showBackIcon}
                    onMenuClick={this.handleMenuClick}
                />
                <Slide
                    className={s.slider}
                    visible={menuShowed}
                    direction='left'
                    start={FULL_SCREEN_WIDTH}
                    end='0'
                >
                    <Navigation
                        className={s.navigation}
                        onClick={this.handleNavigationClick}
                    />
                </Slide>
                <div className={cx(s.content)}>
                    <div className={cx(s.mobile, s.hasTopPadding)} />
                    {this.props.children}
                </div>
                <SubFooter />
                <Footer />
            </div>
        );
    }

}

export default ComputerLayout;
