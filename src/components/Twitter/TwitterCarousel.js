/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/28/2020 4:21 PM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Description: <script src="js/plugins/twitterFetcher.js"></script>
 * Relative Path: src/components/Twitter/TwitterCarousel.js
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TwitterCarousel.scss';

class TwitterCarousel extends React.Component {
	render () {
		return (
			<section id="twitter" className="bg-light-grey">
				<Container>
					<Row>
						<Col md={12}>
							<div className="twitter-warp">
								<div className="customNavigation customNavigation-4">
									<a className="btn-1 prev-twitter-2 hover-border-theme hover-text-theme">
										<i className="fa fa-chevron-up"> </i></a>
									<a className="btn-1 next-twitter-2 hover-border-theme hover-text-theme">
										<i className="fa fa-chevron-down"> </i></a>
								</div>
								<i className="fa fa-twitter twitter-logo-fix border-color-theme color-theme"> </i>
								<div className="twitter1-warp ">
									<div id="twitter-bx-2" className="twitter-widget twitter-widget-1 jcarousel">

									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default TwitterCarousel;
