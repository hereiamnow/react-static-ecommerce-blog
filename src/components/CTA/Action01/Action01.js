/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/07/2019 9:19 AM
 * Relative Path: src/components/CTA/Action01/Action01.js
 * Description: Simple Call to Action Page Section
 */

import React, { Component } from 'react'
import { Link } from 'gatsby'
import './style.css'

class Action01 extends Component {

	// constructor(props){
	// super(props);
	// this.state = {};
	// }

	// componentWillMount(){}
	// componentDidMount(){}
	// componentWillUnmount(){}

	// componentWillReceiveProps(){}
	// shouldComponentUpdate(){}
	// componentWillUpdate(){}
	// componentDidUpdate(){}

	render () {
		return (
				<section id="call" className="bg-light-grey">

					<div className="container">

						<div className="row">

							<div className="col-md-12">

								<div className="call1">

									<h3>{this.props.CTA_HEADER}</h3>

									<p>{this.props.CTA_TEXT}</p>

									<Link to={this.props.CTA_URL}
									      className="ot-btn btn-main-color btn-rounded text-up white-text"
									      title={this.props.BUTTON_TEXT}>
											{this.props.BUTTON_TEXT} <i className="fa fa-arrow-circle-right" aria-hidden="true"> </i>
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
