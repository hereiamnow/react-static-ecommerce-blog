/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 12:29 AM
 * Relative Path: src/components/Footer/RecentPosts/recentPosts.jsx
 * Description: Component is a child of the Footer component.
 */

/* Based on Dotted HTML template. See copyrights in readme.md */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import './style.css'

class RecentPosts extends Component {
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
				<div className="widget widget-footer widget-footer-blog">

					<div className="title-warp">
						<h3 className="title-inline">Recent Blog Posts</h3>
						<div className="customNavigation customNavigation-3">
							{/*font-awesome chevron-up chevron-down*/}
							<a className="btn-1 prev-blog2 hover-border-theme hover-text-theme">
								<i className="fa fa-chevron-down" /></a>
							<a className="btn-1 next-blog2 hover-border-theme hover-text-theme">
								<i className="fa fa-chevron-up" /></a>
						</div>

					</div>

					<div className="blog2-warp">
						<div className="slider8">

							{/*REPEATABLE BLOG ITEM*/}
							<div className="blog2-item">

								<Link to="/" className="blog2-img">
									<img src="images/Blog/footer01.jpg" className="img-responsive" alt="Image" />
								</Link>

								<div className="blog2-detail">

									<Link to="/">
										<h3 className="hover-text-theme">Lawsuit filed in 5th federal CIRCUIT COURTS</h3>
									</Link>

									<p>United States Vaping Association Challenges FDA Regulation as Violation of Separation of Powers</p>
								</div>

							</div>

							<div className="blog2-item">

								<Link to="/" className="blog2-img">
									<img src="images/Blog/footer01.jpg" className="img-responsive" alt="Image" />
								</Link>

								<div className="blog2-detail">
									<Link to="/">
										<h3 className="hover-text-theme">President Trump’s Proposed Flavor Ban Under Fire</h3>
									</Link>
									<p>PRESIDENT Trump’s proposal to ban all e-cigarette flavors has been questioned by health</p>
								</div>

							</div>

						</div>

					</div>

					<Link to="/" className="ot-btn btn-main-bg bg-theme btn-rounded white-text"> READ BLOG </Link>

				</div>
		)
	}
}

export default RecentPosts
