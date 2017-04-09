import React, { Component, PropTypes as pt } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { noop } from 'lodash';
import s from './Hero.scss';
import cx from 'classnames';
import Button from '../Button';
import Link from '../Link';
import { COLOR_CAT} from '../../../../constants/colors';

@withStyles(s)
class Hero extends Component {
    static propTypes = {
        className: pt.string,
        header: pt.string,
        subheader: pt.string,
        button: pt.string,
        onLoad: pt.func,
        onClick: pt.func,
        onLoading: pt.func,
        link: pt.string.isRequired,
        src: pt.string.isRequired
    };

    static defaultProps = {
        onLoad: noop,
        onClick: noop,
        onLoading: noop
    };

    render() {
        const { src, className, onLoad, onClick, button, header, subheader } = this.props;
        const backgroundStyle = {
          backgroundImage: 'url(' + src + ')'
        };

        return (
            <div
                style={backgroundStyle}
                className={cx(s.root, s[className], className)}>
                  <div className={cx(s.content)}>
                    <h1 className={cx(s.header)}>{header}
                    </h1>
                    <h4 className={cx(s.subheader)}>{subheader}
                    </h4>
                    <Link to='/products/all-products'>
                      <Button cat color={COLOR_CAT}>{button}</Button>
                    </Link>
                  </div>
            </div>
        );
    }
}


export default Hero;
