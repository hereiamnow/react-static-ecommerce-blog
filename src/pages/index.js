import React from 'react';
import Layout from '../layout/index';
import LayerSlider from '../components/Slider/LayerSlider';
import IconBox from '../components/IconBox';
import Feature from '../components/Feature';
import Cta from '../components/CTA/Action01';
import LatestTwitter from '../components/Twitter/index.js';
import TwitterCarousel from '../components/Twitter/TwitterCarousel';
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
				<LatestTwitter/>
				<TwitterCarousel/>
			</Layout>
	);
}


