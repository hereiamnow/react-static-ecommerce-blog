import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import product from '../../../data/Products';
import Layout from '../../layout/membership';
import SEO from '../../components/SEO/SEO';
import ShopFooter from '../../components/Shop/ShopFooter';
import SubHeader from '../../components/SubHeader';
import Subscribe from '../../components/Subscribe';

export default () => (
		<Layout>

			<Helmet title={`Membership | ${config.siteTitle}`} />

			<SEO title="Business Membership" keywords={['USVA', 'FDA']} />

			<SubHeader title={`Memberships - ${config.siteTitle}`}
				crumbLabel="Memberships" />

			<section id="main-content">
				<div className="container">
					<div className="row">
						<div className="main-shop">
							{
								product.items
										.filter(item => item.category === 'Subscription')
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
														<div className="product-description">
															<div className="product-category">{item.category}</div>
															<div className="product-price">
																<ins>{item.price}</ins>
															</div>
															<div className="product-title">
																<h3>
																	<Link to={item.link}>
																		{item.title}
																	</Link>
																</h3>
															</div>
															<div className="product-rate">
																<i className="fa fa-star-o"> </i>
																<i className="fa fa-star-o"> </i>
																<i className="fa fa-star-o"> </i>
																<i className="fa fa-star-o"> </i>
																<i className="fa fa-star-o"> </i>
															</div>
															<div className="product-reviews">
																<a title={item.customerReviews + ' customer reviews'}>{item.customerReviews + ' customer reviews'}</a>
															</div>
														</div>
													</div>
											);
										})
							}
						</div>{/*main-shop*/}
					</div>{/*row*/}
				</div>{/*container*/}
			</section>

			<ShopFooter />

			<Subscribe/>

		</Layout>
)
