import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'
import Header from '../components/Header';

/*import '../../static/css/site/style.css';*/
/*import "./index.css";*/

export default class MainLayout extends React.Component {
	render () {
		const {children} = this.props;
		return (
				<div id='page' className="layout-container">
					<Helmet>
						<body className="royal_loader" />
						<meta name="description" content={config.siteDescription} />

						{/* Bootstrap */}
						<link rel="stylesheet"
						      href="/css/bootstrap/3.3.6/bootstrap.css"/>

						{/* Google Fonts */}
						<link rel="stylesheet"
						      href="https://fonts.googleapis.com/css?family=Oswald:400,700,300"/>

						{/* Google Fonts */}
						<link rel="stylesheet"
						      href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic"/>

						{/* Font Awesome */}
						<link rel="stylesheet"
						      href="/css/fonts/font-awesome/css/font-awesome.min.css"/>

						{/* TODO: Layer Slider */}
						<link rel="stylesheet"
						      href="/layerslider/css/layerslider.css"/>

						{/* TODO: Layer Slider */}
						<link rel="stylesheet"
						      href="/css/owl.carousel/owl.carousel.css"/>

						{/* Site/Style does not seem to work 100% when imported from component*/}
						<link rel="stylesheet"
						      href="/css/site/style.css"/>

						<link rel="shortcut icon" href="favicon.png"/>
					</Helmet>
					<Header/>
					{children}
					<Footer/>
					<SubFooter/>
				</div>
		);
	}
}
