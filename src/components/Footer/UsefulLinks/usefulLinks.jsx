/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 1:12 AM
 * Relative Path: src/components/Footer/UsefulLinks/usefulLinks.js
 * Description: Component is a child of the Footer component.
 */

/* Based on Dotted HTML template. See copyrights in readme.md */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import './style.css'

/*Todo: Get links from Graph Ql*/
function getDataFromSource () {
	return [
		{
			'id': 'faq',
			'url': '/faq',
			'title': 'Frequently Asked Questions'
		}, {
			'id': 'membership',
			'url': '/membership',
			'title': 'Memberships'
		},
		{
			'id': 'donate',
			'url': '/donate',
			'title': 'Donate'
		}, {
			'id': 'terms',
			'url': '/terms-of-service',
			'title': 'Terms of Service'
		}, {
			'id': 'privacy',
			'url': '/privacy-policy',
			'title': 'Privacy Policy'
		}
	]
}

class UsefulLinks extends Component {
/*
		constructor (props) {
			super(props)
			this.state = {}
		}

		componentWillMount () {}

		componentDidMount () {}

		componentWillUnmount () {}

		componentWillReceiveProps () {}

		shouldComponentUpdate () {}

		componentWillUpdate () {}

		componentDidUpdate () {}
*/

	render () {
		return (
				<div className="widget widget-footer">

					<div className="title-warp">
						<h3 className="title-inline">Useful Links</h3>
					</div>

					<ul className="useful-link">
						{getDataFromSource().map(data => (
								<li key={data.id}>
									<Link to={data.url} title={data.title}>
										{data.title}
									</Link>
								</li>
						))}
					</ul>

				</div>
		)
	}
}

export default UsefulLinks
