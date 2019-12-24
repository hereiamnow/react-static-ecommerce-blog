/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/09/2019 10:15 AM
 * Relative Path: src/components/Slider/LayerSlider/LayerSlider.js
 * Description: Based on Dotted HTML template
 */

import React from 'react'
import Slide from '../Slides/Slide01'

const layerStyle = {
	'width': '100%',
	'height': '500px',
	'maxWidth': '1920'
}

const LayerSlider = () => (

	<section id="layer-slider" className='no-padding'>

		<div id='full-slider-wrapper'>

			<div id='layerslider' className='slider1' style={layerStyle}>

				<Slide/>

				<Slide/>

				<Slide/>

			</div>

		</div>

	</section>

)
export default LayerSlider
