/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/28/2020 4:07 PM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Twitter/LatestTwitter.js
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./LatestTwitter.scss";

class LatestTwitter extends React.Component {
	render () {
		return (
			<section id="twitter" className="bg-mid-grey bg-twitter">
				<Container>
					<Row>
						<h3 className="title-center white-text">Latest Twitter</h3>
						<i className="fa fa-twitter icon-twitter-3" aria-hidden="true"> </i>
						<div id="twitter-owl" className="twitter-owl-warp"> </div>
					</Row>
				</Container>
			</section>
		);
	}
}

export default LatestTwitter;
