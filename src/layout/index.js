import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import Header from '../components/Header';
import '../sass/main.scss';

export default class MainLayout extends React.Component {
	render () {
		const {children} = this.props;
		return (
			<React.Fragment>
				<div id="page" className="layout-container">
					<Helmet>
						<body className="royal_loader" />
						<meta name="description" content={config.siteDescription} />

						{/* Font Awesome */}
						<link rel="stylesheet" href="/css/fonts/font-awesome/css/font-awesome.min.css" />
						{/* TODO: Layer Slider */}
						<link rel="stylesheet" href="/layerslider/css/layerslider.css" />
						{/* TODO: Layer Slider */}
						<link rel="stylesheet" href="/css/owl.carousel/owl.carousel.css" />

						<link rel="stylesheet" href="/css/site/style.css" />




					</Helmet>

					<Header />

					{children}

					<Footer />

					<SubFooter />
				</div>

				{/*jQuery v2.2.4*/}
				<script src="/js/vendor/jquery.min.js"></script>
				{/*Bootstrap 3.3.6*/}
				<script src="/js/vendor/bootstrap.js"></script>

				{/*jQuery mmenu v5.6.5*/}
				<script type="text/javascript" src="js/plugins/jquery.mmenu.all.min.js"></script>
				<script type="text/javascript" src="js/site/mobilemenu.js"></script>

				{/*GreenSock*/}
				<script type="text/javascript" src="/layerslider/js/greensock.js"></script>

				{/*LayerSlider Library and init*/}
				<script type="text/javascript" src="/layerslider/js/layerslider.transitions.js"></script>
				<script type="text/javascript" src="/layerslider/js/layerslider.kreaturamedia.jquery.js"></script>
				<script type="text/javascript" src="/js/site/layerslider.js"></script>

				{/*Owl Carousel Library and init*/}
				{/*<script src="/js/plugins/owl.carousel.js"></script>*/}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"
					integrity="sha256-251s88HEsEfGL2RufZmRwGohKTHDYr9T+aJAazDwlGY="
					crossOrigin="anonymous"></script>
				<script src="/js/site/owl.js"></script>

				{/*PreLoader Library*/}
				<script type="text/javascript" src="/js/plugins/royal_preloader.js"></script>

				{/*Bx Slider Library and init*/}
				{/*<script src="/js/plugins/jquery.bxslider.min.js"></script>*/}
				<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
				<script src="/js/site/bx-blog.js"></script>

				{/*Global Js initialize jquery libraries*/}
				<script src="/js/site/template.js"></script>

			</React.Fragment>
		);
	}
}
