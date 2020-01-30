/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/6/2019 12:37 PM
 * Project: The USVA Demo
 * Filename: components/SubFooter/SubFooter.js
 */

import React from 'react'
import { Link } from 'gatsby'
import config from "../../../data/SiteConfig";

function getDataFromSource () {
	return [
		{
			'id': 'home',
			'url': '/',
			'title': 'Home'
		}, {
			'id': 'swag',
			'url': '/coming-soon',
			'title': 'Swag'
		}, {
			'id': 'membership',
			'url': '/membership',
			'title': 'Membership'
		},
		{
			'id': 'donate',
			'url': '/donate',
			'title': 'Donate'
		}, {
			'id': 'terms',
			'url': '/legal/terms-of-service',
			'title': 'Terms Of Service'
		}, {
			'id': 'privacy',
			'url': '/legal/privacy-policy',
			'title': 'Privacy Policy'
		}, {
			'id': 'contact',
			'url': '/contact',
			'title': 'Contact'
		}

	]
}

const SubFooter = (props) => (
		<section className="no-padding" id="copyright-1">
			<div className="container">
				<div className="row">
					<div className="warp-copyright-1">
						<ul className="copyright-1">
							{getDataFromSource().map((data, index) => (
									<li key={index}>
										<Link to={data.url} title={data.title}>
											{data.title}
										</Link>
									</li>
							))}
						</ul>
						<p className="text-copyright-1">
							{config.siteCopyright}
						</p>
					</div>
				</div>
			</div>
		</section>
)

export default SubFooter
