/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 11/23/2019 7:38 PM
 * Project: The USVA Demo
 * GitRepo:
 * Relative Path: components/Header/Header.js
 */

import React from 'react'
import { Link } from 'gatsby'
import config from '../../../data/SiteConfig';

const Header = () => (

		<div id='HeaderContainer'>

			<header id='stick' className='header-v1'>
				<div className='header-v1-inner'>

					{/*TODO: Site Header - Images*/}
					<div className='logo-1'>
						<Link to='/'>
								<img src='https://placehold.it/300x90/DEB152/222.png'
								     className='img-responsive'
								     alt='Image' />
						</Link>
						<p className='slogan-1'>{config.slogan}</p>
					</div>

					{/*Icons to the right of the Header*/}
					<ul className='navi-right'>
						<li>
							<a href={config.urlFacebook} title='Visit us on Facebook' className='color-theme border-color-theme bg-hover-theme'>
								<i className='fa fa-facebook' aria-hidden='true'> </i></a>
						</li>
						<li>
							<a href={config.urlTwitter} title='See our latest tweets' className='color-theme border-color-theme bg-hover-theme'>
								<i className='fa fa-twitter' aria-hidden='true'> </i></a>
						</li>
						{/* TODO: SEARCH
						<li>
							<a href='#' className='btn-search-navi color-theme border-color-theme bg-hover-theme'>
								<i className='fa fa-search ' aria-hidden='true'></i></a>
							<div className='search-popup'>
								<form className='form-search-navi'>
									<div className='input-group'>
										<input className='form-control' placeholder='Search Here' type='text' />
									</div>
								</form>
							</div>
						</li>
						*/}
						{/*SHOPPING CART ICON*/}
						<li>
							<Link to='/coming-soon' title={'Your Cart is Empty'} className='color-theme border-color-theme bg-hover-theme'>
									<i className='fa fa-shopping-cart' aria-hidden='true'> </i>
							</Link>
						</li>
					</ul>

					{/*Links on the Header*/}
					<nav id='main-navi' className='nav-r'>
						<ul className='navi-level-1'>
							<li className='has-sub'>
								<Link to='/' title='USVA Home' className='dark-text hover-text-theme'>
									<span>Home</span>
								</Link>
								{/*sub level start*/}
								<ul className='navi-level-2 '>
									<li className='bg-theme'>
										<Link to='/coming-soon' className='dark-text hover-text-theme'>
											<span>Swag</span>
										</Link>
									</li>
									<li className='bg-theme'>
										<Link to='/membership' className='dark-text hover-text-theme'>
											<span>Membership</span>
										</Link>
									</li>
									<li className='bg-theme'>
										<Link to='/donate' className='dark-text hover-text-theme'>
											<span>Donate</span>
										</Link>
									</li>
								</ul>
							</li>

							<li className=''>
								<Link to='/coming-soon' title='coming soon' className='dark-text hover-text-theme'>
									<span>Swag</span>
								</Link>
							</li>

							<li className=''>
								<Link to='/membership' title='USVA Membership' className='dark-text hover-text-theme'>
									<span>Membership</span>
								</Link>
							</li>

							<li className=''>
								<Link to='/donate' title='Donate' className='dark-text hover-text-theme'>
									<span>Donate</span>
								</Link>
							</li>

							<li className=''>
								<Link to='/contact' title='Contact' className='dark-text hover-text-theme'>
									<span>Contact</span>
								</Link>
							</li>
							{/*blog menu*/}
							<li className='has-sub_z'>
								<Link to='/blog' title='Blog' className='dark-text hover-text-theme'>
									<span>Blog</span>
								</Link>

								{/*sub level start*/}
								<ul className='navi-level-2 '>
									<li className='bg-theme'>
										<Link to='/blog-timeline' className='white-text'>
											Blog Timeline
										</Link>
									</li>
								</ul>
							</li>
						</ul>

					</nav>

					<a href='#menu' className='btn-menu-mobile'><i className='fa fa-bars' aria-hidden='true'></i></a>
				</div>

			</header>

			<div className='header-line'></div>

		</div>
)

export default Header
