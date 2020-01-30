/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 12:33 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo:
 * Relative Path: src/components/Footer/SocialLinks/socialLinks.jsx
 * Description: Component is a child of the Footer component. Displays Company slogan, about text, Facebook and Twitter Links
 *  imported from SiteConfig.js
 */

/* Based on Dotted HTML template. See copyrights in readme.md */
import React, { Component } from 'react';
import config from '../../../../data/SiteConfig';
import './style.css';
import stripeLogo from '../../../images/powered_by_stripe.svg';

const divStyle = {
	clear: 'both',
	position: 'relative',
	marginTop: '40px',
	float: 'left'
};

class socialLinks extends Component {

	/*Todo: Update constructor*/

	/*
	constructor (props) {
		super(props)
		this.state = {}
	}

	componentWillMount () {}

	componentDidMount () {}

	componentWillUnmount () {}

	componentWillReceiveProps () {}

	shouldComponentUpdate () {}

	componentWillUpdate () {}

	componentDidUpdate () {}
	*/

	render () {
		return (
				<div className="widget widget-footer ">

					{/*LOGO AND SLOGAN*/}
					<div className="logo logo-footer">
						<img src="https://placehold.it/600x300/414446.PNG" className="img-responsive" alt="Image" />
						{/*<img src="/images/usva/small-business-membership-baner.png" className="img-responsive" alt="Image" />*/}
						<p className="slogan-1">{config.slogan}</p>
					</div>
					<p className="text-about">{config.aboutText}</p>

					{/*SOCIAL MEDIA ICONS AND LINKS*/}
					<ul className="social social-f1">
						<li>
							<a href={config.urlFacebook} target="_blank" className="">
								<i className="fa fa-facebook" aria-hidden="true" /></a>
						</li>
						<li>
							<a href={config.urlTwitter} target="_blank" className="">
								<i className="fa fa-twitter" aria-hidden="true" /></a>
						</li>

					</ul>
					<div style={divStyle}>

						<table border="0" cellPadding="10" cellSpacing="0" align="center">
							<tbody>
							<tr>
								<td align="center"></td>
							</tr>
							<tr>
								<td align="center">
									<a href="https://www.paypal.com/webapps/mpp/paypal-popup"
										title="How PayPal Works"
										onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;">
										<img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/logo-center/9_bdg_secured_by_pp_2line.png" border="0" alt="Secured by PayPal"/>
									</a>
								</td>
							</tr>
							</tbody>
						</table>

					</div>
				</div>
		);
	}
}

export default socialLinks;
