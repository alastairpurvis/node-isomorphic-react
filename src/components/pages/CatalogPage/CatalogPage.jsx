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
                <Container showScrollToTop contentArea fullWidth>
                    <Catalog {...this.props} />
                </Container>
            </div>
        );
    }

}

export default CategoryPage;
