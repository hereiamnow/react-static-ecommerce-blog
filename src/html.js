import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
	return (
			<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{/* Font Awesome, Bootstrap & Google Fonts */}
				<link rel="stylesheet" href="/css/fonts/font-awesome/css/font-awesome.min.css" />
				<link rel="stylesheet" href="/css/bootstrap/3.3.6/bootstrap.css"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:400,700,300"/>
				<link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic"/>
				{props.headComponents}
				<link rel="shortcut icon" href="/favicon.png"/>
			</head>
			<body {...props.bodyAttributes}>

			{props.preBodyComponents}

			<noscript key="noscript" id="gatsby-noscript">
				This app works best with JavaScript enabled. :)
			</noscript>

			<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{__html: props.body}}
			/>

			{props.postBodyComponents}
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
