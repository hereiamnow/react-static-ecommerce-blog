/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 1/30/2020 3:23 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/success.js
 * Description:
 */

import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/layout2';
import config from '../../data/SiteConfig';

const Success = props => (
	<Layout> <Helmet title={`Site Coming Soon | ${config.siteTitle}`} />
		<section className="section full-height bgcms">
			<div className="overlay-cms full-height"></div>
			<div className="hero-wrap hero-wrap-cms">
				<img src='/images/usva/blueusvaline.png' alt='image'  style={{marginBottom: '15px'}}/>
				<h3 className="sub-heading-cms">Thank you for contacting us!</h3>
			</div>
		</section>
	</Layout>
);

export default Success;