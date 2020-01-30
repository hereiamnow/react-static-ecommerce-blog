import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/layout2';
import config from '../../data/SiteConfig';
import Countdown from '../components/Countdown'

class ComingSoonPage extends Component {
	render () {

		const currentDate = new Date();
		const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

		return (
				<Layout>
					<Helmet title={`Site Coming Soon | ${config.siteTitle}`} />
					<section className="section full-height bgcms">
						<div className="overlay-cms full-height"></div>

						<div className="hero-wrap hero-wrap-cms">

							<h3 className="sub-heading-cms">Texas Independence Day 2020</h3>

							{/*Texas Independence Day*/}
							<Countdown date={`${year}-03-01T00:00:00`} />

							<p className="sub-heading-cms">Meanwhile stay connected with us</p>
							<ul className="social social-big-white">
								<li className="facebook">
									<a href={config.urlFacebook}><i className="fa fa-facebook"></i></a>
								</li>
								<li className="twitter">
									<a href={config.urlTwitter}><i className="fa fa-twitter"></i></a>
								</li>

								<li className="youtube">
									<a href={config.urlYouTubeChanel}><i className="fa fa-youtube-play"></i></a>
								</li>
								<li className="linkedin">
									<a href={config.urlLinkedIn}><i className="fa fa-linkedin"></i></a>
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
