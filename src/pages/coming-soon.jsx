import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/layout2';
import config from '../../data/SiteConfig';

class ComingSoonPage extends Component {
	render () {
		return (
				<Layout>
					<Helmet title={`About | ${config.siteTitle}`} />
					<section className="section full-height bgcms">
						<div className="overlay-cms full-height"></div>
						<div className="hero-wrap hero-wrap-cms">
							<p className="heading-cms">Under Construction.</p>
							<p className="sub-heading-cms">We are coming soon</p>

							<div className="dotted-countdown">
								<ul className="countdown">
									<li>
										<span className="days">00</span>
										<p className="days_ref">days</p>
									</li>

									<li>
										<span className="hours">00</span>
										<p className="hours_ref">hours</p>
									</li>

									<li>
										<span className="minutes">00</span>
										<p className="minutes_ref">minutes</p>
									</li>

									<li>
										<span className="seconds">00</span>
										<p className="seconds_ref">seconds</p>
									</li>
								</ul>
							</div>

							{/*You are a social butterfly*/}
							<p className="sub-heading-cms">Stay Connect With Us</p>
							<ul className="social social-big-white">
								<li className="facebook">
									<a href={config.urlFacebook}><i className="fa fa-facebook"></i></a>
								</li>
								<li className="twitter">
									<a href={config.urlTwitter}><i className="fa fa-twitter"></i></a>
								</li>
								<li className="google-plus">
									<a href={config.urlFacebook}><i className="fa fa-google-plus"></i></a>
								</li>
								<li className="youtube">
									<a href={config.urlFacebook}><i className="fa fa-youtube-play"></i></a>
								</li>
								<li className="linkedin">
									<a href={config.urlFacebook}><i className="fa fa-linkedin"></i></a>
								</li>
							</ul>

						</div>
					</section>
					<script src="/js/plugins/countdown-custom.js"></script>
				</Layout>
		);
	}
}

export default ComingSoonPage;
