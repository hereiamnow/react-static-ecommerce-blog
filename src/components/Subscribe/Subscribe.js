/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Subscribe/Subscribe.js
 * Description: Based on Dotted HTML template
 */

import React from 'react'
import "./Subscribe.scss"

/* Based on Dotted HTML template*/
export class Subscribe extends React.Component {

	render () {
		//console.log(this.props)
		return (
				<section id="subcrible" className="no-padding bg-theme">
					<div className="container ">
						<div className="row">
							<div className="subcribe-warp subcribe1-warp ">

								<div className="col-md-3">
									<h4 className="white-text">Subscribe To Newsletters</h4>
									<i className="white-text">Integer neque diam, porta non augue non</i>
								</div>{/*column*/}

								<div className="col-md-9">

									<form className="form-inline subcribe1">

										<div className="form-group">
											<input type="text" className="form-control" id="name" placeholder="Your name..."/>
										</div>{/*form-group*/}

										<div className="form-group">
											<input type="email" className="form-control" id="exampleInputEmail3" placeholder="Your email..."/>
										</div>{/*form-group*/}

										<button type="submit" className="btn btn-default">
											SUBCRIBE ME <i className="fa fa-chevron-right ls-preloaded" aria-hidden="true"> </i>
										</button>

									</form>

								</div>{/*column*/}
							</div>{/*subscribe wrapper*/}
						</div>{/*row*/}
					</div>{/*container*/}
				</section>
		)
	}
}

export default Subscribe
