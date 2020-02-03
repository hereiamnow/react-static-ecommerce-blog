/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/07/2019 11:19 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Feature/Feature.jsx
 */

import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AccordionToggle from 'react-bootstrap/AccordionToggle'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'
import features from '../../../data/Features'

const Feature = () => (
		<section id="feature" className="bg-light-grey">
			<Container>
				<Row>
					<div className="feature-warp">
						<Col md={8}>
							<h3>Why You Should Choose Us?</h3>
							<p className="feature-des-text">Integer est arcu, congue nec vulputate faucibus, aliquam eget tellus. Aliquam laoreet aliquam mi, vitae tempus orci mattis vitae. Cras ultricies mauris est, ultricies sagittis diam euismod et. Curabitur at dolor vitae felis semper ullamcorper eu mattis felis. Phasellus felis diam, egestas non hendrerit a, lacinia a neque. </p>
							<div className="discover">
								<img src="https://placehold.it/316x330/ccc.png" className="img-responsive" alt="Image" />

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
						</Col>
						<Col md={4}>
							<Accordion defaultActiveKey="0">
								{features.items
									.map((item, index) => {
										/// if index === 0 ( it is first element in array ) then add class active
										var activeClass = (index === 0) ? 'panel panel-custom border-color-theme' : 'panel panel-custom';

										return(
											<Card key={item.id} className={activeClass}>
												<AccordionToggle as={Card.Header} eventKey={index} className={'panel-heading'}>
													<h3 className="panel-title">{item.title}</h3>
												</AccordionToggle>
												<AccordionCollapse eventKey={index} className={'panel-collapse'}>
													<Card.Body className={'panel-body'}>
														{item.body}
													</Card.Body>
												</AccordionCollapse>
											</Card>
										);
									})
								}
							</Accordion>
						</Col>
					</div>{/*eo feature-warp wrapper*/}
				</Row>
			</Container>
		</section>
);

export default Feature
