/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/20/2019 2:12 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/TopBar/TopBar.js
 * Description: USVA Theme demo
 */

import React, { Component } from "react";
import "./TopBar.scss";

class TopBar extends Component {
	render() {
		return (
				<div className="topbar-1 bg-theme">
					<div className="topbar-1-inner ">
						<ul className="subnavi">
							<li><Link href="/">Home</Link></li>
							<li><Link href="/">Support</Link></li>
							<li><Link href="/">Help</Link></li>
							<li><Link href="/">Login</Link></li>
							<li><Link href="/">Register</Link></li>
						</ul>

						<ul className="social social-1">
							<li><a href="#" className="color-theme hover-text-dark"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="#" className="color-theme hover-text-dark"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							{/*
							<li><a href="#" className="color-theme hover-text-dark"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
							<li><a href="#" className="color-theme hover-text-dark"><i className="fa fa-tumblr" aria-hidden="true"></i></a></li>
							<li><a href="#" className="color-theme hover-text-dark"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
							*/}
						</ul>

						<ul className="topbar-info topbar-info-1">
							<li><span>Email :</span>&nbsp;&nbsp;<a href="mailto:support@dotted.com">support@dotted.com</a></li>
							<li><span>Phone :</span>&nbsp;&nbsp;<a href="tel:7736629817">773 - 662 - 9817</a></li>
						</ul>
					</div>
				</div>
		);
	}
}

export default TopBar;
