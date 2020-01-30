import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/index';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import SubHeader from '../components/SubHeader/SubHeader';

const AboutUsPage = ({location}) =>  {
		return (
			<Layout location={location} crumbLabel="About Us">
				<Helmet title={`About | ${config.siteTitle}`} />
				<SubHeader title={`About | ${config.siteTitle}`}
					crumbLink={'/about'}
					crumbLabel={'About'} />
				<div className="about-container">
					<About />
				</div>
			</Layout>
		);
};

export default AboutUsPage
