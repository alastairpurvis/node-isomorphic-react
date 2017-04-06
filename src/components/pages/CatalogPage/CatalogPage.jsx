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
import CategoryNav from '../../ui/common/CategoryNavigation';
import Catalog from '../../ui/common/Catalog';
import Container from '../../ui/common/Container';

const title = 'Products';

class CategoryPage extends Component {
    static pageName = 'category';

    static contextTypes = {
        setTitle: pt.func.isRequired
    };

    componentWillMount() {
        this.context.setTitle(this.props.title || title);
    }

    componentWillReceiveProps(nextProps) {
        this.context.setTitle(nextProps.title || title);
    }

    render() {
        return (
            <div>
                <CategoryNav {...this.props} />
                <Container showScrollToTop contentArea>
                    <Catalog {...this.props} />
                </Container>
            </div>
        );
    }

}

export default CategoryPage;
