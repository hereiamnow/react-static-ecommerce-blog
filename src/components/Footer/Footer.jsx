/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Footer/Footer.jsx
 * Description: USVA Theme demo
 */

import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialLinks from './SocialLinks/socialLinks'
import RecentPosts from './RecentPosts/RecentPosts'
import UsefulLinks from './UsefulLinks/usefulLinks'
import Contacts from './Contacts/contacts'
import BackToTop from './BackToTop/BackToTop'
import './Footer.scss'

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
					<BackToTop />
					<footer className="footer-v1">
						<Container>
							<Row>
								<Col md={3}>
									<SocialLinks />
								</Col>
								<Col md={3}>
									<RecentPosts />
								</Col>
								<Col md={3}>
									<UsefulLinks />
								</Col>
								<Col md={3}>
									<Contacts />
								</Col>
							</Row>
						</Container>
					</footer>
				</React.Fragment>
		)
	}
}

export default Footer
