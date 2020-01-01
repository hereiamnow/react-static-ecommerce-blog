import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
	return (
			<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}

				{/*jquery import - works, maybe*/}
				{/*<script src="https://code.jquery.com/jquery-3.3.1.min.js"
				        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
				        crossOrigin="anonymous"
				/>*/}
			</head>

			<body {...props.bodyAttributes}>

			{props.preBodyComponents}

			<noscript key="noscript" id="gatsby-noscript">
				This app works best with JavaScript enabled.
			</noscript>

			<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{__html: props.body}}
			/>

			{props.postBodyComponents}
			{/*jQuery v2.2.4*/}
			<script src="/js/vendor/jquery.min.js"></script>
			{/*Bootstrap 3.3.6*/}
			<script src="/js/vendor/bootstrap.js"></script>

			{/*jQuery mmenu v5.6.5*/}
			<script type="text/javascript" src="js/plugins/jquery.mmenu.all.min.js"></script>
			<script type="text/javascript" src="js/site/mobilemenu.js"></script>

			{/*GreenSock*/}
			<script type="text/javascript" src="/layerslider/js/greensock.js"></script>

			{/*LayerSlider Library and init*/}
			<script type="text/javascript" src="/layerslider/js/layerslider.transitions.js"></script>
			<script type="text/javascript" src="/layerslider/js/layerslider.kreaturamedia.jquery.js"></script>
			<script type="text/javascript" src="/js/site/layerslider.js"></script>

			{/*Owl Carousel Library and init*/}
			<script src="/js/plugins/owl.carousel.js"></script>
			<script src="/js/site/owl.js"></script>

			{/*PreLoader Library*/}
			<script type="text/javascript" src="/js/plugins/royal_preloader.js"></script>

			{/*Bx Slider Library and init*/}
			<script src="/js/plugins/jquery.bxslider.min.js"></script>
			<script src="/js/site/bx-blog.js"></script>

			{/*Global Js initialize jquery libraries*/}
			<script src="/js/site/template.js"></script>

			</body>
			</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
