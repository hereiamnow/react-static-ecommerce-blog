/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/1/2020 8:42 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/layout/layout2.jsx
 * Description:
 */

import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import '../sass/main.scss';




export default class TestLayout extends React.Component {
	render () {
		const {children} = this.props;
		return (
			<div id="page" className="layout-container">
				<Helmet>
					<body className="royal_loader_z" />
					<meta name="description" content={config.siteDescription} />

					{/* Font Awesome */}
					<link rel="stylesheet" href="/css/fonts/font-awesome/css/font-awesome.min.css" />

					{/* TODO: Layer Slider */}
					<link rel="stylesheet" href="/layerslider/css/layerslider.css" />

					{/* TODO: Layer Slider */}
					<link rel="stylesheet" href="/css/owl.carousel/owl.carousel.css" />

					<link rel="stylesheet" href="/css/site/style.css" />

				</Helmet>

				{children}
			</div>
		);
	}
}

