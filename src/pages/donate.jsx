/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/donate.jsx
 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby'
import Layout from '../layout/layout1';
import ShopFooter from '../components/Shop/ShopFooter/index'
import SubHeader from '../components/SubHeader/SubHeader'
import Subscribe from '../components/Subscribe'

function getData () {
	return [
		{
			'id': 'recurring-donation',
			'category': 'Donations',
			'title': 'Monthly Recurring Consumer Donation',
			'price': '$10.00-$100.00',
			'link': '/recurring-donation',
			'thumbnail': 'images/donation_recurring-donation_w640.png',
			'buttonText': 'Donate',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'one-time-donation',
			'category': 'Donations',
			'title': 'One Time Consumer Donation',
			'price': '$5.00-$100.00',
			'link': '/one-time-donation',
			'thumbnail': 'images/donation_consumer-donation_w640.png',
			'buttonText': 'Donate',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'legal-fund',
			'category': 'Donations',
			'title': 'Legal Fund Donation',
			'price': '$20.00 - $1,000.00',
			'link': '/legal-fund',
			'thumbnail': 'images/donation_legal-fund-donation_w640.png',
			'buttonText': 'Donate',
			'productRate': 0,
			'customerReviews': 0
		}
	]
}

function getMembership () {
	return [
		{
			'id': 'member-01',
			'category': 'Membership',
			'title': 'Annual Membership',
			'price': '$1,000.00 ',
			'link': '/member-01',
			'thumbnail': 'images/membership_annual-membership_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'member-02',
			'category': 'Membership',
			'title': 'Bi-Annual Membership',
			'price': '$550.00',
			'link': '/member-02',
			'thumbnail': 'images/membership_bi-annual_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}, {
			'id': 'member-03',
			'category': 'Membership',
			'title': 'Monthly Recurring Membership',
			'price': '$100.00',
			'link': '/member-03',
			'thumbnail': 'images/monthly-recurring-membership_w640.png',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		},  {
			'id': 'travel-fund',
			'category': 'Membership',
			'title': 'USVA Travel Fund',
			'price': '$30.00 - $100.00',
			'link': '/travel-fund',
			'thumbnail': 'images/donation_travel-fund.jpeg',
			'buttonText': 'Purchase',
			'productRate': 0,
			'customerReviews': 0
		}
	]

}

export default () => (
		<Layout>

			<Helmet>
				<title>Donations</title>
				<meta name="description" content="The USVA represents the e-liquid manufacturers, device manufacturers,
						wholesalers, distributors, vape shop owners, small business owners and entrepreneurs who have developed
						innovative and quality vapor products" />
				<meta name="Keywords" content="United States Vaping Association, Vaping Association, Frequently Asked Questions" />
				<meta name="robots" content="index, nofollow, noarchive" />
			</Helmet>

			<SubHeader pageTitle="USVA - Consumer Donation" breadcrumb="Donate" />

			<section id="main-content">

				<div className="container">

					<div className="row">

						<div className="main-shop">

							{getData().map(data => (

								<div className="product" key={data.id}>

									<div className="product-image">
										<img alt="" src={data.thumbnail} />
										<div className="product-overlay">
											<Link href="/">
												<a title="Donate">{data.buttonText}</a>
											</Link>
										</div>
									</div>

									<div className="product-description">

										<div className="product-category">{data.category}</div>

										<div className="product-title">
											<h3>
												<Link href="/">
													<a title="Legal Fund Donation">{data.title}</a>
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

						</div>

					</div>

				</div>

			</section>

			<ShopFooter />

			<Subscribe/>
		</Layout>
)
