/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 2/1/2020 12:19 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Section/RecentBlogBootstrap.js
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class RecentBlogBootstrap extends React.Component {
	render () {
		return (
			<section id="blog" className="bg-light-grey">
				<Container>
					<Row>
						<Col md={12}>
							<div className="title-warp">
								<h3 className="title-landing">Recent Blog</h3>
							</div>
						</Col>{/*eo col-12*/}
						<Col md={12}>
							<div className="blog-landing-warp">
								<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

									<ol className="carousel-indicators">
										<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
										<li data-target="#carousel-example-generic" data-slide-to="1"></li>
										<li data-target="#carousel-example-generic" data-slide-to="2"></li>
									</ol>

									<div className="carousel-inner" role="listbox">

										<div className="item">
											<div className="item-blog blog-single-feature-img">
												<div className="blog-feature-warp">
													<a href="blog-single.html">
														<img src="http://placehold.it/640x640/ccc.jpg" className="img-responsive" alt="Image"/>
													</a>
												</div>
												<div className="blog-feature-content">
													<div className="blog-feature-content-inner">
														<div className="blog-data">
															<div className="date-time bg-theme">
																<span className="date">15</span>
																<span className="month">MAY</span>
															</div>
															<div className="blog-type">
																<img src="http://placehold.it/20x24/ccc.jpg" className="img-responsive" alt="Image"/>
															</div>
														</div>
														<div className="blog-text">
															<a href="blog-single.html"><h4 className="hover-text-theme">
																Single Feature Post</h4></a>
															<p>Nunc cursus semper urna ut iaculis. Quisque elementum, nisl vitae egestas iaculis, est leo placerat libero, in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
															<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
														</div>
													</div>
													<div className="blog-footer-2 border-color-theme">
														<ul>
															<li>Posted by <a href="#" className="hover-text-theme">admin</a></li>
															<li>On <a href="#" className="hover-text-theme">Web,</a> <a href="#" className="hover-text-theme">Development</a></li>
															<li><a href="#" className="hover-text-theme">Comment 12</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="item-blog blog-single-feature-img">
												<div className="blog-feature-warp">
													<a href="blog-single.html">
														<img src="http://placehold.it/640x640/ccc.jpg" className="img-responsive" alt="Image"/>
													</a>
												</div>
												<div className="blog-feature-content">
													<div className="blog-feature-content-inner">
														<div className="blog-data">
															<div className="date-time bg-theme">
																<span className="date">15</span>
																<span className="month">MAY</span>
															</div>
															<div className="blog-type">
																<img src="http://placehold.it/20x24/ccc.jpg" className="img-responsive" alt="Image"/>
															</div>
														</div>
														<div className="blog-text">
															<a href="blog-single.html"><h4 className="hover-text-theme">
																Single Feature Post</h4></a>
															<p>Nunc cursus semper urna ut iaculis. Quisque elementum, nisl vitae egestas iaculis, est leo placerat libero, in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
															<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
														</div>
													</div>
													<div className="blog-footer-2 border-color-theme">
														<ul>
															<li>Posted by <a href="#" className="hover-text-theme">admin</a></li>
															<li>On <a href="#" className="hover-text-theme">Web,</a> <a href="#" className="hover-text-theme">Development</a></li>
															<li><a href="#" className="hover-text-theme">Comment 12</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="item-blog blog-single-feature-img">
												<div className="blog-feature-warp">
													<a href="blog-single.html">
														<img src="http://placehold.it/640x640/ccc.jpg" className="img-responsive" alt="Image"/>
													</a>
												</div>
												<div className="blog-feature-content">
													<div className="blog-feature-content-inner">
														<div className="blog-data">
															<div className="date-time bg-theme">
																<span className="date">15</span>
																<span className="month">MAY</span>
															</div>
															<div className="blog-type">
																<img src="http://placehold.it/20x24/ccc.jpg" className="img-responsive" alt="Image"/>
															</div>
														</div>
														<div className="blog-text">
															<a href="blog-single.html"><h4 className="hover-text-theme">
																Single Feature Post</h4></a>
															<p>Nunc cursus semper urna ut iaculis. Quisque elementum, nisl vitae egestas iaculis, est leo placerat libero, in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
															<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
														</div>
													</div>
													<div className="blog-footer-2 border-color-theme">
														<ul>
															<li>Posted by <a href="#" className="hover-text-theme">admin</a></li>
															<li>On <a href="#" className="hover-text-theme">Web,</a> <a href="#" className="hover-text-theme">Development</a></li>
															<li><a href="#" className="hover-text-theme">Comment 12</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="item-blog blog-single-feature-img">
												<div className="blog-feature-warp">
													<a href="blog-single.html">
														<img src="http://placehold.it/640x640/ccc.jpg" className="img-responsive" alt="Image"/>
													</a>
												</div>
												<div className="blog-feature-content">
													<div className="blog-feature-content-inner">
														<div className="blog-data">
															<div className="date-time bg-theme">
																<span className="date">15</span>
																<span className="month">MAY</span>
															</div>
															<div className="blog-type">
																<img src="http://placehold.it/20x24/ccc.jpg" className="img-responsive" alt="Image"/>
															</div>
														</div>
														<div className="blog-text">
															<a href="blog-single.html"><h4 className="hover-text-theme">
																Single Feature Post</h4></a>
															<p>Nunc cursus semper urna ut iaculis. Quisque elementum, nisl vitae egestas iaculis, est leo placerat libero, in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
															<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
														</div>
													</div>
													<div className="blog-footer-2 border-color-theme">
														<ul>
															<li>Posted by <a href="#" className="hover-text-theme">admin</a></li>
															<li>On <a href="#" className="hover-text-theme">Web,</a> <a href="#" className="hover-text-theme">Development</a></li>
															<li><a href="#" className="hover-text-theme">Comment 12</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="item-blog blog-single-feature-img">
												<div className="blog-feature-warp">
													<a href="blog-single.html">
														<img src="http://placehold.it/640x640/ccc.jpg" className="img-responsive" alt="Image"/>
													</a>
												</div>
												<div className="blog-feature-content">
													<div className="blog-feature-content-inner">
														<div className="blog-data">
															<div className="date-time bg-theme">
																<span className="date">15</span>
																<span className="month">MAY</span>
															</div>
															<div className="blog-type">
																<img src="http://placehold.it/20x24/ccc.jpg" className="img-responsive" alt="Image"/>
															</div>
														</div>
														<div className="blog-text">
															<a href="blog-single.html"><h4 className="hover-text-theme">
																Single Feature Post</h4></a>
															<p>Nunc cursus semper urna ut iaculis. Quisque elementum, nisl vitae egestas iaculis, est leo placerat libero, in feugiat elit tortor sed arcu.Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
															<a href="blog-single.html" className="readmore hover-text-theme">[read more]</a>
														</div>
													</div>
													<div className="blog-footer-2 border-color-theme">
														<ul>
															<li>Posted by <a href="#" className="hover-text-theme">admin</a></li>
															<li>On <a href="#" className="hover-text-theme">Web,</a> <a href="#" className="hover-text-theme">Development</a></li>
															<li><a href="#" className="hover-text-theme">Comment 12</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>

									</div>

									<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
										<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
										<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>{/*blog-landing-warp*/}
						</Col>{/*eo col-12*/}
					</Row>
				</Container>
			</section>
		);
	}
}

export default RecentBlogBootstrap;