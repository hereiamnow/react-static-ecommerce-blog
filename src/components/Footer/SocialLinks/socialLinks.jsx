/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 12:33 AM
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
						<img src="http://placehold.it/90x24/ccc.jpg" className="img-responsive" alt="Image" />
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
						<a href="https://stripe.com">
							<img src={stripeLogo} alt="Payments powered by Stripe" />
						</a>
					</div>
				</div>
		);
	}
}

export default socialLinks;
