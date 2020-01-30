import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import Header from '../components/Header';
import '../sass/main.scss';

export default class MembershipLayout extends React.Component {
	render () {
		const {children} = this.props;
		return (
			<div id="page" className="layout-container">
				<Helmet>
					<body className="royal_loader_z" />
					<meta name="description" content={config.siteDescription} />

					{/* Font Awesome */}
					<link rel="stylesheet" href="/css/fonts/font-awesome/css/font-awesome.min.css" />

					<link rel="stylesheet" href="/css/site/style.css" />

				</Helmet>

				<Header />

				{children}

				<Footer />

				<SubFooter />
			</div>
		);
	}
}
