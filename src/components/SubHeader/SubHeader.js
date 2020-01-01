/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 11/23/2019 7:41 PM
 * Relative Path: src/components/SubHeader/SubHeader.jsx
 */

import React from 'react'
import {Link} from 'gatsby'
import config from "../../../data/SiteConfig"

export class SubHeader extends React.Component {

	render () {

		/*console.log (this.props)*/

		return (
				<section id="subheader" className="no-padding sub-header-border">

					<div className="container">

						<div className="row">

							<div className="sub-header-warp">

								<h3 className="title-subheader">{this.props.pageTitle}</h3>

								<ol className="breadcrumb">
									<li>You are here:</li>
									<li>
										<Link to="/">
											 Home
										</Link>
									</li>
									<li className="active">{this.props.breadcrumb}</li>
								</ol>

							</div>

						</div>

					</div>

				</section>
		);
	}
}

export default SubHeader
