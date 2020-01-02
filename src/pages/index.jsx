/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/05/2019 7:16 PM
 * Relative Path: src/pages/index.jsx
 * Notes: Landing page for the site.
 */

import React from 'react';
import Layout from '../layout';
import LayerSlider from '../components/Slider/LayerSlider';
import IconBox from '../components/IconBox';
import Feature from '../components/Feature';
import Cta from '../components/CTA/Action01';
/*import RecentBlog from '../components/RecentBlog/RecentBlog'*/

export default function Landing () {
	const ctaHeader = 'You can make a difference with your money.';
	const ctaBody = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. ';
	const ctaButton = 'MEMBERSHIP';
	const ctaUrl = '/membership';
	return (

			<Layout>
				<LayerSlider />
				<IconBox />
				<Cta header={ctaHeader} body={ctaBody} button={ctaButton} url={ctaUrl} />
				{/*<RecentBlog sectionTitle={'Recent Blog'}/>*/}
				<Feature />
			</Layout>
	);
}


