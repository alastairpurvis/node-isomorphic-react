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
