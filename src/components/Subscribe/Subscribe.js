/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 9:29 PM
 * Relative Path: src/components/Subscribe/Subscribe.js
 * Description: Based on Dotted HTML template
 */

import React from 'react'

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
									<h4 className="white-text">
										Subscribe To Newsletters
									</h4>
									<i className="white-text">Integer neque diam, porta non augue non</i>
								</div>{/*END COLUMN*/}

								<div className="col-md-9">

									<form className="form-inline subcribe1">

										<div className="form-group">
											<input type="text" className="form-control" id="name" placeholder="Your name..."/>
										</div>{/*FORM GROUP*/}

										<div className="form-group">
											<input type="email" className="form-control" id="exampleInputEmail3" placeholder="Your email..."/>
										</div>{/*FORM GROUP*/}

										<button type="submit" className="btn btn-default">
											SUBCRIBE ME <i class="fa fa-chevron-right ls-preloaded" aria-hidden="true"> </i>
										</button>


									</form>

								</div>{/*END COLUMN*/}

							</div>{/*END SUBSCRIBE WRAPPER*/}

						</div>{/*END ROW*/}

					</div>{/*END CONTAINER*/}

				</section>
		)
	}
}

export default Subscribe
