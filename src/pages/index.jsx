/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:16 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/index.jsx
 * Notes: Landing page for the site.
 */

import React from 'react';
import Layout from '../layout/layout1';
import Helmet from "react-helmet";
import LayerSlider from '../components/Slider/LayerSlider';
import IconBox from '../components/IconBox';
import Feature from '../components/Feature';
import Cta from '../components/CTA/Action01';
import LatestTwitter from '../components/Twitter/index.js';
import TwitterCarousel from '../components/Twitter/TwitterCarousel';
import Contact from '../components/Section/ContactPlus';
import RecentBlog from '../components/RecentBlog/RecentBlog';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';


export default function Landing () {


	const ctaHeader = 'You can make a difference with your money.';
	const ctaBody = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. ';
	const ctaButton = 'MEMBERSHIP';
	const ctaUrl = '/membership';

	return (
		<Layout>
			<Helmet >
				<title>{`Helment ${config.companyName} | ${config.siteTitle}`}</title>
				{/*jQuery v2.2.4*/}
				{/*<script src="/js/vendor/jquery.min.js"></script>*/}
				{/*Bootstrap 3.3.6*/}
				{/*<script src="/js/vendor/bootstrap.js"></script>*/}
			</Helmet>

			<SEO
				title={`SEO ${config.companyName} | ${config.siteTitle}`}
				keywords={['USVA', 'FDA', 'Vaping Ban', 'Flavor Ban', 'Vaping Regulations']} />

			{/*TODO: Convert Carousel*/}
			<LayerSlider />

			<IconBox color={'bg-white'} />

			{/*Call to Action*/}
			<Cta header={ctaHeader} body={ctaBody} button={ctaButton} url={ctaUrl} color={'bg-light-grey'} />

			<RecentBlog sectionTitle={'Recent Blog'} color={'bg-white'} />

			<Feature />

			<LatestTwitter />

			{/*Twitter Carousel*/}
			<TwitterCarousel  />

			{/*Section Contact with Google Map*/}
			<Contact class={'bg-mid-grey'}/>
		</Layout>
	);
}


