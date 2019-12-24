/**
 * Created by Shawn Miller
 * User: Developer
 * Project: The USVA Demo
 * Filename: components/SubFooter/SubFooter.js
 * Date: 12/6/2019 12:37 PM
 */

import React from 'react'
import { Link } from 'gatsby'
import config from "../../../data/SiteConfig";

function getDataFromSource () {
	return [
		{
			'id': 'home',
			'url': '/',
			'title': 'HOME'
		}, {
			'id': 'apparel',
			'url': '/apparel',
			'title': 'APPAREL'
		}, {
			'id': 'membership',
			'url': '/membership',
			'title': 'MEMBERSHIP'
		},
		{
			'id': 'donate',
			'url': '/donate',
			'title': 'DONATE'
		}, {
			'id': 'terms',
			'url': '/terms-of-service',
			'title': 'TERMS OF SERVICE'
		}, {
			'id': 'privacy',
			'url': '/privacy-policy',
			'title': 'PRIVACY POLICY'
		}
	]
}

const SubFooter = (props) => (

		<section className="no-padding" id="copyright-1">

			<div className="container">

				<div className="row">

					<div className="warp-copyright-1">

						<ul className="copyright-1">
							{getDataFromSource().map(data => (
									<li key={data.id}>
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
