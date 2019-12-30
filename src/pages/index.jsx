/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/05/2019 7:16 PM
 * Relative Path: src/pages/landing.jsx
 * Notes: This was once the index page.
 */

import React from 'react'
import Layout from "../layout";
import LayerSlider from '../components/Slider/LayerSlider'
import IconBox from '../components/IconBox'
import Feature from '../components/Feature'
import RecentBlog from '../components/RecentBlog/RecentBlog'

export default function Landing () {
	return (
			<Layout>
				<LayerSlider/>
				<IconBox/>
				<RecentBlog sectionTitle={'Recent Blog'}/>
				<Feature/>
			</Layout>
	)
}


