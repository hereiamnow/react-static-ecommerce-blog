/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/07/2019 11:19 AM
 * Relative Path: src/components/Feature/Feature.jsx
 */

import React from 'react'
import { Link } from 'gatsby'

/*Based on Dotted HTML template*/
const Feature = () => (

		<section id="feature" className="bg-light-grey">

			<div className="container">

				<div className="row">

					<div className="feature-warp">

						<div className="col-md-8">

							<h3>Why You Should Choose Us?</h3>

							<p className="feature-des-text">Integer est arcu, congue nec vulputate faucibus, aliquam eget tellus. Aliquam laoreet aliquam mi, vitae tempus orci mattis vitae. Cras ultricies mauris est, ultricies sagittis diam euismod et. Curabitur at dolor vitae felis semper ullamcorper eu mattis felis. Phasellus felis diam, egestas non hendrerit a, lacinia a neque. </p>

							<div className="discover">
								<img src="http://placehold.it/316x330/ccc.jpg" className="img-responsive" alt="Image" />

								<ul className="feature">

									<li className="wow fadeIn" data-wow-delay=".25s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> U.S. Congress
									</li>

									<li className="wow fadeIn" data-wow-delay=".35s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> Administration & Agencies
									</li>

									<li className="wow fadeIn" data-wow-delay=".45s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> State Capitals
									</li>

									<li className="wow fadeIn" data-wow-delay=".55s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> Education
									</li>

									<li className="wow fadeIn" data-wow-delay=".65s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> Guidance
									</li>

									<li className="wow fadeIn" data-wow-delay=".75s">
										<i className="fa fa-check-circle color-theme" aria-hidden="true"></i> Public Affairs
									</li>

								</ul>

								<Link to="/discover-more"
								      className="ot-btn btn-sub-color bg-hover-theme animation-icon btn-rounded bg-sub-theme-callback white-text wow fadeIn"
								      data-wow-delay="1s">
										DISCOVER MORE <i className="fa fa-chevron-right" aria-hidden="true"></i>

								</Link>

							</div>

						</div>
						{/*eo column*/}

						<div className="col-md-4">

							<div className="" id="accordion" role="tablist" aria-multiselectable="true">

								<div className="panel panel-custom border-color-theme">

									<div className="panel-heading " role="tab" id="headingOne">
										<h3 className="panel-title">

											<a role="button"
											   data-toggle="collapse"
											   data-parent="#accordion"
											   href="#collapseOne"
											   aria-expanded="true"
											   aria-controls="collapseOne">
												Cras Suscipit Pulvinar Dui Vitae
											</a>

										</h3>
									</div>

									<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
										<div className="panel-body">
											Pellentesque eleifend euismod sapien non egestas. Donec ante sapien, semper tristique nulla vitae, porttitor consequat nisi.
										</div>
									</div>
								</div>
								<div className="panel panel-custom ">
									<div className="panel-heading " role="tab" id="headingTwo">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Morbi Ante Mi Commodo Nec Dignissim
											</a>
										</h4>
									</div>
									<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
										<div className="panel-body">
											Pellentesque eleifend euismod sapien non egestas. Donec ante sapien, semper tristique nulla vitae, porttitor consequat nisi.
										</div>
									</div>
								</div>
								<div className="panel panel-custom ">
									<div className="panel-heading " role="tab" id="headingThree">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Nullam Tristique Scelerisque Felis Vel Tempor
											</a>
										</h4>
									</div>
									<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
										<div className="panel-body ">
											Pellentesque eleifend euismod sapien non egestas. Donec ante sapien, semper tristique nulla vitae, porttitor consequat nisi.
										</div>
									</div>
								</div>
								<div className="panel panel-custom ">
									<div className="panel-heading " role="tab" id="headingFour">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												Vivamus Tempor Est In Tortor Faucibus, At Lacinia Libero
											</a>
										</h4>
									</div>
									<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
										<div className="panel-body ">
											Pellentesque eleifend euismod sapien non egestas. Donec ante sapien, semper tristique nulla vitae, porttitor consequat nisi.
										</div>
									</div>
								</div>

							</div>
							{/*eo accordion*/}

						</div>
						{/*eo column*/}

					</div>
					{/*eo feature-warp wrapper*/}

				</div>
				{/*eo row*/}

			</div>
			{/*eo container*/}

		</section>
)

export default Feature
