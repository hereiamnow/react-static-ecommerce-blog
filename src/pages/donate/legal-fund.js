import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../layout/layout1';
import SubHeader from '../../components/SubHeader';
import Subscribe from '../../components/Subscribe';
import {PayPalButton} from "react-paypal-button-v2";
import config from '../../../data/SiteConfig';

class LegalFund extends React.Component {

	render () {

		const size = {
			padding: '10px'
		};
		const onSuccess = (payment) => {
			/*TODO: Bind the payment object value to state or props*/
			console.log("Payment successful!", payment);
		}
		const onCancel = (data) => {
			// The user pressed "cancel" or closed the PayPal popup
			console.log('Payment cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}
		const onError = (err) => {
			// The main Paypal script could not be loaded or something blocked the script from loading
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		/*TODO: set this string to 'production*/
		/*TODO: set these strings from your props or state*/
		let env = 'sandbox';
		let currency = 'USD';
		let total = 1000;

		/*TODO: Remove keys*/
		const client = {
			sandbox:    'sb-zd43ob395816@business.example.com',
			production: 'AbO5PIj8kw8t8UKOFpeoKGwu7O76Ej9Bo_zmIdFBVYu7X7ZZM561rxIAQQb0Du5YR7SFWqbb0u-4XtQp',
		};

		return (
			<Layout>
				<Helmet>
					<title>Legal Fund - {config.siteTitle}</title>
					<meta name="description" content="The USVA represents the e-liquid manufacturers, device manufacturers, wholesalers, distributors, vape shop owners, small business owners and entrepreneurs who have developed innovative and quality vapor products" />
				</Helmet>
				<SubHeader title={`Legal Fund - ${config.siteTitle}`}
					crumbLabel="Donation" crumbLink="/donate" />
				<section id="main-content">
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<div className="product-img-warp">
									<img src="/images/usva/donation_legal-fund-donation_w640.png" className="img-responsive" alt="Image" />
								</div>
							</div>
							<div className="col-md-7">
								<div className="product-detail-warp">
									<div className="product-category">Donation</div>
									<div className="product-title">
										<h2>{config.siteTitle} Legal Fund Donation</h2>
									</div>
									<div className="product-price">
										<ins>$0.00</ins>
									</div>

									<div className="product-rate">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-half-o"></i>
									</div>

									<div className="clearboth m-tb-20 line"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
									   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
									   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
									   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
									   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

									<div className="clearfix div18"></div>

									<div className="m-t-20">
										<PayPalButton
											amount="0"
											onSuccess={(details, data) => {
												alert("Transaction completed by " + details.payer.name.given_name);
												console.log("Transaction completed by " + details.payer.name.given_name);
												console.log("orderID:" +  data.orderID);
												// OPTIONAL: Call your server to save the transaction
												return fetch("/membership/transaction-complete", {
													method: "post",
													body: JSON.stringify({
														orderID: data.orderID
													})
												});//eo return
											}}
										/>
									</div>
								</div>
							</div>
							<div className="clearboth m-tb-20"></div>
						</div>
					</div>
				</section>
				<Subscribe />
			</Layout>
		);
	}
}

export default LegalFund;
