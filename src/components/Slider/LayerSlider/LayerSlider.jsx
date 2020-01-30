/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/09/2019 10:15 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Slider/LayerSlider/LayerSlider.js
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
