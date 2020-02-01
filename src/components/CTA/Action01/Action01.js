/**
 * Created by S Miller <hereiamnow@Gmail.com>
 * Date: 12/07/2019 9:19 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/CTA/Action01/Action01.js
 * Description: Simple Call to Action Page Section
 */

import React  from 'react'
import { Link } from 'gatsby'
import './style.css'

class Action01 extends React.Component {
	render () {
		return (
			/*<section id="call" className="bg-light-grey">*/

				<section id="call" className={this.props.color}>

					<div className="container">

						<div className="row">

							<div className="col-md-12">

								<div className="call1">

									<h3>{this.props.header}</h3>

									<p>{this.props.body}</p>

									<Link to={this.props.url}
									      className="ot-btn btn-main-color btn-rounded text-up white-text">
											{this.props.button} <i className="fa fa-arrow-circle-right" aria-hidden="true"> </i>
									</Link>

								</div>

							</div>{/*eo column*/}

						</div>{/*eo row*/}

					</div>{/*eo container*/}

				</section>
		)
	}
}

export default Action01
