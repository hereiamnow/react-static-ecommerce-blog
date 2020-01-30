/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/28/2020 4:07 PM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Twitter/LatestTwitter.js
 * Description:
 */

import React from 'react';
import "./LatestTwitter.scss";

class LatestTwitter extends React.Component {
	render () {
		return (
			<section id="twitter" className="bg-mid-grey bg-twitter">
				<div className="container">
					<div className="row">
						<h3 className="title-center white-text">Latest Twitter</h3>
						<i className="fa fa-twitter icon-twitter-3" aria-hidden="true"> </i>
						<div id="twitter-owl" className="twitter-owl-warp"> </div>
					</div>
				</div>
			</section>
		);
	}
}

export default LatestTwitter;
