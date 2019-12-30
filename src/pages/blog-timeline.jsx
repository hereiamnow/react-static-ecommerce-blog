/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/05/2019 9:29 PM
 * Relative Path: src/pages/blog-timeline.jsx
 */

import React from "react";
import { Link } from 'gatsby'
import Layout from '../layout'
import config from '../../data/SiteConfig';
import Helmet from "react-helmet";
import SubHeader from '../components/SubHeader/SubHeader'
import Blog from '../components/Blog'

/*Used for Call to Action component*/
import CTA from '../components/CTA/Action01'
const ctaHeaderText = 'You can make a difference with your money.'
const ctaBodyText = 'Quisque id accumsan justo, id gravida ipsum. Nulla ligula mauris, viverra vel mi a, vehicula lobortis purus. Phasellus dui mi, malesuada condimentum ex id, feugiat aliquam nisl. Praesent dignissim laoreet lectus, eget ultricies mauris pretium ac volutpat. '
const BUTTON_TEXT = 'DONATE'
const CTA_URL = '/donate'

const BlogTimeline = () => (
	<Layout>
		<Helmet>
			<title>Blog Timeline - {config.companyName}</title>

			<meta name="description" content="The USVA represents the e-liquid manufacturers, device manufacturers,
			wholesalers, distributors, vape shop owners, small business owners and entrepreneurs who have developed
			innovative and quality vapor products"/>

			<meta name='Keywords' content='United States Vaping Association, Vaping Association, Frequently Asked Questions'/>
			<meta name="robots"
			      content="index, nofollow, noarchive" />
		</Helmet>

		<SubHeader pageTitle={config.companyName + ' Blog'} breadcrumb="Blog Timeline" />

		<Blog/>

		{/*Call to Action - Donate*/}
		<CTA CTA_HEADER={ctaHeaderText} CTA_TEXT={ctaBodyText} BUTTON_TEXT={BUTTON_TEXT} CTA_URL={CTA_URL} />
	</Layout>
)
export default BlogTimeline
