import React, { Component } from 'react';
import Container from '../../ui/common/Container';
import Product from '../../ui/common/Product';

class ProductPage extends Component {
    static pageName = 'product';

    render() {
        return (
            <div>
                <Container contentArea>
                    <Product {...this.props} />
                </Container>
            </div>
        );
    }
}

export default ProductPage;
