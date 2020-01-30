/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Footer/Footer.jsx
 */

import React, { Component } from 'react'
import SocialLinks from './SocialLinks/socialLinks'
import RecentPosts from './RecentPosts/RecentPosts'
import UsefulLinks from './UsefulLinks/usefulLinks'
import Contacts from './Contacts/contacts'
import BackToTop from './BackToTop/BackToTop'
import './style.css'

class Footer extends Component {
	render () {
		/*
		const {config} = this.props
		const url = config.siteRss
		const {copyright} = config
		if (!copyright) {
			return null
		}
		*/
		return (

				<React.Fragment>

					{/*
					<UserLinks config={config} labeled />
					<h4>{copyright}</h4>
					<Link to={url}>
						<button>Subscribe</button>
					</Link>
					*/}

					<BackToTop />

					<footer className="footer-v1">

						<div className="container">

							<div className="row">

								<div className="col-md-3">
									<SocialLinks />
								</div>

								<div className="col-md-3">
									<RecentPosts />
								</div>

								<div className="col-md-3">
									<UsefulLinks />
								</div>

								<div className="col-md-3">
									<Contacts />
								</div>

							</div>{/*row*/}

						</div>{/*container*/}

					</footer>{/*.footer-v1*/}

				</React.Fragment>

		)
	}
}

export default Footer
