/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/20/2019 2:20 AM
 * Relative Path: src/components/Testimonial/Testimonial.js
 * Description:
 */

import React, { Component } from 'react';
import './style.css';

class Testimonial extends Component {
	render () {
		return (
				<section id="testimonial">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<ul className="nav nav-tabs responsive tab1" id="myTab">
									<li className="test-class active">
										<a className="deco-none  red-class" href="#resp-tab1"><h4> Cras Suscipit
										                                                           Pulvinar Dui
										                                                           Vitae</h4></a>
									</li>
									<li className="test-class">
										<a className="" href="#resp-tab2"><h4> Morbi Ante Mi Commodo Nec Dignissim</h4>
										</a>
									</li>
									<li>
										<a className="deco-none " href="#resp-tab3"><h4> Nullam Tristique
										                                                 Scelerisque</h4>
										</a>
									</li>
								</ul>
								<div className="tab-content tab-content-1 responsive">
									<div className="tab-pane active" id="resp-tab1">
										<img style="max-width: 260px;" src="http://placehold.it/740x460/ccc.jpg" className="img-responsive img-tab-demo" alt="Image" />
										<div className="tab-text-warp">
											<h3>
												Why Choose Dotted? </h3>
											<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
											   molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
											   eros et accumsan et iusto odio dignissim.</p><br />
											<p>Quisque interdum viverra ipsum ut tincidunt. Etiam blandit dictum purus,
											   id auctor arcu sollicitudin eget. Proin fringilla purus vitae cursus
											   placerat.</p>
										</div>
									</div>
									<div className="tab-pane" id="resp-tab2">
										<img style="max-width: 260px;" src="http://placehold.it/316x330/ccc.jpg" className="img-responsive img-tab-demo" alt="Image" />
										<div className="tab-text-warp">
											<h3>
												Fresh & Clean Design </h3>
											<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
											   molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
											   eros et accumsan et iusto odio dignissim.</p><br/>
											<p>Quisque interdum viverra ipsum ut tincidunt. Etiam blandit dictum purus,
											   id auctor arcu sollicitudin eget. Proin fringilla purus vitae cursus
											   placerat.</p>
										</div>
									</div>
									<div className="tab-pane" id="resp-tab3">
										<img style="max-width: 260px;" src="http://placehold.it/738x999/ccc.jpg" className="img-responsive img-tab-demo" alt="Image" />
										<div className="tab-text-warp">
											<h3>
												Easy To Customize </h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
											   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
											   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											   occaecat cupidatat non proident, sunt in culpa qui officia deserunt
											   mollit anim id est laborum.</p><br>
											<p>Quisque interdum viverra ipsum ut tincidunt. Etiam blandit dictum purus,
											   id auctor arcu sollicitudin eget. Proin fringilla purus vitae cursus
											   placerat.</p><br>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
											   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
											   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											   occaecat cupidatat non proident, sunt in culpa qui officia deserunt
											   mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="title-warp">
									<h3 className="title-inline">Testimonial</h3>
									<div className="customNavigation customNavigation-1">
										<a className="btn-1 prev-testimonia3 hover-border-theme hover-text-theme">
											<i className="fa fa-chevron-left"></i></a>
										<a className="btn-1 next-testimonia3 hover-border-theme hover-text-theme">
											<i className="fa fa-chevron-right"></i></a>
									</div>
									<!-- End owl button -->
								</div>
								<div className="testimonial-3-warp">
									<div id="owl-testimonial-3" className="owl-carousel owl-theme owl-testimonial-3 border-color-theme">
										<div className="item">
											<div className="testimonial-3-item">
												<div className="avatar">
													<img src="http://placehold.it/750x750/ccc.jpg" className="img-responsive" alt="Image" />
												</div>

												<blockquote>
												  <span className="quote-square bg-theme"><i className="fa fa-quote-right" aria-hidden="true"></i>
												  		<span className="arrow-down-l-2 border-color-theme"></span>
												  </span>Duis pulvinar risus nisl, id feugiat mi porttitor fringilla.
												         Fusce vitae suscipit sapien, nec rutrum justo. Cum sociis
												         natoque penatibus et magnis dis parturientmontes, nascetur
												         ridiculus mus.
													<footer>James P.
													        Stanley, <cite title="Earthworks Garden Kare" className="color-theme">Earthworks
													                                                                              Garden
													                                                                              Kare</cite>
													</footer>
												</blockquote>
											</div>
										</div>
										<div className="item">
											<div className="testimonial-3-item">
												<div className="avatar">
													<img src="http://placehold.it/256x256/ccc.jpg" className="img-responsive" alt="Image"/
												</div>

												<blockquote>
												  <span className="quote-square bg-theme"><i className="fa fa-quote-right" aria-hidden="true"></i>
												  		<span className="arrow-down-l-2 border-color-theme"></span>
												  </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
												         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
												         Ut enim ad minim veniam, quis nostrud exercitation ullamco
												         laboris nisi ut aliquip ex ea commodo
													<footer>Adam P.
													        Slander, <cite title="Earthworks Garden Kare" className="color-theme">Flower
													                                                                              Garden</cite>
													</footer>
												</blockquote>
											</div>
										</div>
										<div className="item">
											<div className="testimonial-3-item">
												<div className="avatar">
													<img src="http://placehold.it/225x225/ccc.jpg" className="img-responsive" alt="Image" />
												</div>

												<blockquote>
												  <span className="quote-square bg-theme"><i className="fa fa-quote-right" aria-hidden="true"></i>
												  		<span className="arrow-down-l-2 border-color-theme"></span>
												  </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
												         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
												         Ut enim ad minim veniam, quis nostrud exercitation ullamco
												         laboris nisi ut aliquip ex ea commodo consequat. Duis aute
												         irure dolor in reprehenderit in voluptate velit esse

													<footer>Anna D.
													        Hermingway, <cite title="Earthworks Garden Kare" className="color-theme">Theme
													                                                                                 Forest</cite>
													</footer>
												</blockquote>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
	);
	}
	}

	export default Testimonial;
