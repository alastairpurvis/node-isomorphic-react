import React, { Component, PropTypes } from 'react';
import Container from '../../ui/common/Container';
import Image from '../../ui/common/Image';
import Row from '../../ui/common/Row';
import Column from '../../ui/common/Column';
import Link from '../../ui/common/Link';
import s from './HomePage.scss';
import cx from 'classnames';
import Button from '../../ui/common/Button';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { COLOR_CAT} from '../../../constants/colors';
import { CDNname } from '../../../config';

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
            <div className={s.root}>
                <Row>
                    <div className={s.hero}>
                        <div className={s.content}>
                            <h1 className={s.header}>
                                <span className={s.heading}>Personalized Skincare</span>
                                <Image className={s.logo} src={CDNname + '/images/logo-full.svg'} />
                            </h1>
                            <h4 className={s.subheader}>
                                Simple, powerful skincare free of harsh chemicals with only the best ingredients on the market.
                            </h4>
                            <Link to='/products/all-products'>
                                <Button className={s.button} cat color={COLOR_CAT}>
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Row>
                <Row weak>
                    <Column>
                    <figure className={cx(s.honey, s.hidden)}>
                        <Link to='/products/all-products'>
                            <Image src={CDNname + '/images/tile1.jpg'} />
                            <figcaption>
							<h2>Face <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={cx(s.honey, s.hidden)}>
                        <Link to='/products/all-products'>
                            <Image src={CDNname + '/images/tile2.jpg'} />
                            <figcaption>
							<h2>Body <span>Care</span> <i>Products</i></h2>
						    </figcaption>
                        </Link>
                    </figure>
                    </Column>
                    <Column>
                    <figure className={cx(s.honey, s.hidden)}>
                        <Link to='/products/all-products'>
                            <Image src={CDNname + '/images/tile3.jpg'} />
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
