/**
 * Created by Shawn Miller
 * User: Developer
 * Project: The USVA Demo
 * GitRepo:
 * Date: 11/23/2019 7:38 PM
 * Relative Path: components/Header/Header.js
 */

import React from 'react'
import { Link } from 'gatsby'
import config from "../../../data/SiteConfig";

/* Based on Dotted HTML template*/
const Header = () => (

		<div id="HeaderContainer">

			<header id="stick" className="header-v1">

				<div className="header-v1-inner">

					<div className="logo-1">
						<Link to="/">
								<img src="http://placehold.it/300x90/DEB152/222.png"
								     className="img-responsive"
								     alt="Image" />
						</Link>
						<p className="slogan-1">{config.slogan}</p>
					</div>

					<ul className="navi-right">

						{/*FACEBOOK ICON*/}
						<li>
							<a href={config.urlFacebook} className="color-theme border-color-theme bg-hover-theme">
								<i className="fa fa-facebook" aria-hidden="true"> </i></a>
						</li>

						{/*TWITTER ICON*/}
						<li>
							<a href={config.urlTwitter} className="color-theme border-color-theme bg-hover-theme">
								<i className="fa fa-twitter" aria-hidden="true"> </i></a>
						</li>

						{/*
						<li>
							<a href="#" className="btn-search-navi color-theme border-color-theme bg-hover-theme">
								<i className="fa fa-search " aria-hidden="true"></i></a>
							<div className="search-popup">
								<form className="form-search-navi">
									<div className="input-group">
										<input className="form-control" placeholder="Search Here" type="text" />
									</div>
								</form>
							</div>
						</li>
						*/}

						{/*SHOPPING CART ICON*/}
						<li>
							<Link to="/cart" className="color-theme border-color-theme bg-hover-theme">
									<i className="fa fa-shopping-cart" aria-hidden="true"> </i>
							</Link>
						</li>
					</ul>

					<nav id="main-navi" className="nav-r">

						<ul className="navi-level-1">

							{/*home menu*/}
							<li className="has-sub">
								<Link to="/" className="dark-text hover-text-theme">
									<span>Home</span>
								</Link>

								{/*sub level start*/}
								<ul className="navi-level-2 ">

									<li className="bg-theme">
										<Link to="/donate" className="white-text">
											Donate
										</Link>
									</li>

									<li className="bg-theme">
										<Link to="/products" className="white-text">
											Products
										</Link>
									</li>
								</ul>

							</li>

							{/*membership menu*/}
							<li className="has-sub">
								<Link to="/membership" className="dark-text hover-text-theme">
									<span>Membership</span>
								</Link>
								{/*sub level start*/}
								<ul className="navi-level-2 ">
									<li className="bg-theme">
										<Link to="/legal-fund-donation" className="white-text">
										Legal Fund Donation
										</Link>
									</li>
									<li className="bg-theme">
										<Link to="/membership" className="white-text">
											Small Business Membership
										</Link>
									</li>
								</ul>
							</li>

							{/*MORE MENU*/}

							{/*BLOG MENU*/}
							<li className="has-subz">
								<Link to="/blog" className="dark-text hover-text-theme">
									<span>Blog</span>
								</Link>

								{/*SUB LEVEL START*/}
								<ul className="navi-level-2 ">

									<li className="bg-theme">
										<Link to="/blog-timeline" className="white-text">
											Blog Timeline
										</Link>
									</li>

								</ul>

							</li>

						</ul>

					</nav>

					<a href="#menu" className="btn-menu-mobile"><i className="fa fa-bars" aria-hidden="true"></i></a>
				</div>

			</header>

			<div className="header-line"></div>

		</div>
)

export default Header
