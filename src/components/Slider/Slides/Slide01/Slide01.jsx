/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/09/2019 10:15 AM
 * Relative Path: src/components/Slider/Slides/Slide01/Slide01.jsx
 * Description: Based on Dotted HTML template
 */

import React from 'react'
import { Link } from 'gatsby'

const imageStyle = {
	top: '10px',
	left: '70%'
}

const h3Style = {
	top: '115px',
	left: '0px'
}

const paraStyle = {
	top: '235px',
	left: '0'

}

const anchorStyle = {
	top: '315px',
	left: '0'
}

const Slider01 = () => (

		<div className="ls-slide" data-ls="transition2d: 1; durationin:500">

			<img className="ls-bg" src="http://placehold.it/1900x590/ccc.png" alt="Image" />

			<img className="ls-l"
			     src="http://placehold.it/700x532/6495ED/FFFFFF.png"
			     alt="Image"
			     style={imageStyle}
			     data-ls="offsetxin:100;delayin:1000;offsetyout:0;offsetxout:100;durationin:500" />

			<h3 className="ls-l"
			    style={h3Style}
			    data-ls="offsetxin:0;offsetyin:100;delayin:400;offsetxout:0;offsetyout:-100;durationin:500">REPRESENTATION</h3>

			<p className="ls-l"
			   style={paraStyle}
			   data-ls="offsetxin:0;offsetyin:100;delayin:600;offsetxout:0;offsetyout:-100;durationin:500">
				The United States Vaping Association represents small businesses and individuals in the vape industry. We offer a solution for those who cannot pay the cost of representing themselves against the federal government by sharing the cost of legal representation as well as working towards a greater goal of deregulation of the vape industry.</p>

			<Link to="/"
			      className="ls-l ot-btn btn-main-color btn-rounded text-up white-text"
			      style={anchorStyle}
			      data-ls="offsetxin:0;offsetyin:100;delayin:800;offsetxout:0;offsetyout:-100;durationin:500">

				CONTINUE READING <i className="fa fa-chevron-right" aria-hidden="true"> </i>

			</Link>

		</div>
)

export default Slider01
