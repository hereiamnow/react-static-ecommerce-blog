import React from 'react';
import Helmet from "react-helmet";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import product from '../../../data/Products';
import Layout from '../../layout/membership';
import SEO from '../../components/SEO/SEO';
import ShopFooter from '../../components/Shop/ShopFooter';
import SubHeader from '../../components/SubHeader';
import Subscribe from '../../components/Subscribe';

export default ({location}) => {
	return (
		<Layout location={location} crumbLabel={"Donations"}>

			<Helmet title={`Donation | ${config.siteTitle}`} />

			<SEO title="Donation" keywords={['USVA', 'USVA.ORG']} />

			<SubHeader title={`Donations - ${config.siteTitle}`}
				crumbLink={'/donate'}
				crumbLabel="Donate" />

			<section id="main-content">
				<Container>
					<Row>
						<div className="main-shop">
							{
								product.items
									.filter(item => item.category === 'Donation')
									.map((item, index) => {
										return (
											<div className="product" key={index}>
												<div className="product-image">
													<img alt="" src={item.thumbnail} />
													<div className="product-overlay">
														<Link to={item.link}>
															{item.buttonText}
														</Link>
													</div>
												</div>
												{/*image*/}
												<div className="product-description">
													<div className="product-category">{item.category}</div>
													<div className="product-price">
														<ins>{item.price}</ins>
													</div>
													{/*price*/}
													<div className="product-title">
														<h3>
															<Link href="/" title="Legal Fund Donation">
																{item.title}
															</Link>
														</h3>
													</div>
													{/*title*/}
													<div className="product-rate">
														<i className="fa fa-star-o"> </i>
														<i className="fa fa-star-o"> </i>
														<i className="fa fa-star-o"> </i>
														<i className="fa fa-star-o"> </i>
														<i className="fa fa-star-o"> </i>
													</div>
													{/*rate*/}
													<div className="product-reviews">
														<a title={item.customerReviews + ' customer reviews'}>{item.customerReviews + ' customer reviews'}</a>
													</div>
													{/*reviews*/}
												</div>
												{/*description*/}
											</div>
										);
									})
							}
						</div>
						{/*main-shop*/}
					</Row>
					{/*row*/}
				</Container>
				{/*container*/}
			</section>
			<ShopFooter />
			<Subscribe />
		</Layout>
	)
}

