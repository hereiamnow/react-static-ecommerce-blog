/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/membership.jsx
 */

import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import config from '../../data/SiteConfig';
import Layout from '../layout/layout1';;
import SEO from '../components/SEO/SEO';
import ShopFooter from '../components/Shop/ShopFooter';
import SubHeader from '../components/SubHeader';
import Subscribe from '../components/Subscribe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function getData () {
	return [
		{
			'id': 'member-01',
			'category': 'Membership',
			'title': 'Annual Membership',
			'price': '$1,000.00 ',
			'link': '/member-01',
			'thumbnail': '/images/usva/membership_annual-membership_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'member-02',
			'category': 'Membership',
			'title': 'Bi-Annual Membership',
			'price': '$550.00',
			'link': '/member-02',
			'thumbnail': '/images/usva/membership_bi-annual_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'member-03',
			'category': 'Membership',
			'title': 'Monthly Recurring Membership',
			'price': '$100.00',
			'link': '/member-03',
			'thumbnail': '/images/usva/monthly-recurring-membership_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		},  {
			'id': 'travel-fund',
			'category': 'Membership',
			'title': 'USVA Travel Fund',
			'price': '$30.00 - $100.00',
			'link': '/travel-fund',
			'thumbnail': '/images/usva/donation_travel-fund.jpeg',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}
	]

}

export default () => (
		<Layout>
			<Helmet title={`Membership | ${config.siteTitle}`} />
			<SEO title="Business Membership" keywords={['USVA', 'FDA']} />
			<SubHeader pageTitle={config.companyName + ' Membership'} breadcrumb="Membership" />

			<section id="main-content">
				<Container>
					<Row>

						<div className="main-shop">

							{getData().map(data => (

								<div className="product" key={data.id}>

									<div className="product-image">
										<img alt="" src={data.thumbnail} />
										<div className="product-overlay">
											<Link to="/membership" title="">
												{data.buttonText}
											</Link>
										</div>
									</div>

									<div className="product-description">

										<div className="product-category">{data.category}</div>
										<div className="product-title">
											<h3>
												<Link href="/" title="Legal Fund Donation">
													{data.title}
												</Link>
											</h3>
										</div>

										<div className="product-price">
											<ins>{data.price}</ins>
										</div>

										<div className="product-rate">
											<i className="fa fa-star-o"> </i>
											<i className="fa fa-star-o"> </i>
											<i className="fa fa-star-o"> </i>
											<i className="fa fa-star-o"> </i>
											<i className="fa fa-star-o"> </i>
										</div>

										<div className="product-reviews">
											<a title={data.customerReviews + ' customer reviews'}>{data.customerReviews + ' customer reviews'}</a>
										</div>

									</div>

								</div>

							))}

						</div>{/*main-shop*/}
					</Row>{/*row*/}
				</Container>{/*container*/}
			</section>

			<ShopFooter />
			<Subscribe/>

		</Layout>
)
