import React, { Component, PropTypes } from 'react';
import Container from '../../ui/common/Container';
import Image from '../../ui/common/Image';
import Hero from '../../ui/common/Hero';
import Row from '../../ui/common/Row';
import Column from '../../ui/common/Column';
import Link from '../../ui/common/Link';
import s from './HomePage.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const title = 'Minimalist, Superfood Skincare';

@withStyles(s)
class HomePage extends Component {
    static pageName = 'home';

    static contextTypes = {
        setTitle: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.context.setTitle(title);
    }

    render() {
        return (
            <div>
                <Row>
                        <Hero src='/images/homepage-hero.jpg' link='/products/all-products' header="Minimalist Skincare" subheader="We make awesome, minimalist skincare that will get you laid because guys love a hoe with great skin."
                        button="Shop Now" />
                </Row>
                <Row weak>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile1.jpg' />
                            <figcaption>
							<h2>Face <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile2.jpg' />
                            <figcaption>
							<h2>Body <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={s.honey}>
                        <Link to='/products/all-products'>
                            <Image src='/images/tile3.jpg' />
                            <figcaption>
							<h2>Anti <span>Aging</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default HomePage;
