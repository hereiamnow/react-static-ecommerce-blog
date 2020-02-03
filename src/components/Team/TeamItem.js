/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 7:30 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Team/TeamItem.js
 * Description: USVA Theme demo
 */

import React from 'react';

class TeamItem extends React.Component {
	render () {
		return (
			<div className="team-item">
				<div className="team-item-img-container">
					<Link to="coming-soon">
						<img src="https://placehold.it/400x400/ccc.png" className="img-responsive" alt="Image" />
					</Link>
					<div className="overlay-1 hover-border-theme">
						<Link to="coming-soon"> <i className="fa fa-link hover-border-theme " /> </Link>
						<Link to="https://placehold.it/400x400/ccc.png" className="single-img-popup" > <i className="fa fa-expand hover-border-theme " /> </Link>
					</div>
				</div>
				<a href="#">
					<h4 className="team-name hover-text-theme">Shawn Miller</h4>
				</a>
				<p className="team-job color-theme "> Development </p>
				<p className="team-info ">
					Sed fringilla diam vel commodo tempor.Aenean in tristique purus. Quisque necest massa. </p>
				<div className="team-social-warp border-color-theme">
					<a href="#" className="hover-text-theme">
						<i className="fa fa-facebook-square" aria-hidden="true" />
					</a>
					<a href="#" className="hover-text-theme">
						<i className="fa fa-twitter-square" aria-hidden="true" />
					</a>
					<a href="#" className="hover-text-theme">
						<i className="fa fa-linkedin-square" aria-hidden="true" />
					</a>
				</div>

			</div>
		);
	}
}

export default TeamItem;
