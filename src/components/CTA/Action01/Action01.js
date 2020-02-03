/**
 * Created by S Miller <hereiamnow@Gmail.com>
 * Date: 12/07/2019 9:19 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/CTA/Action01/Action01.js
 * Description: Simple Call to Action Page Section.
 * Type: PageSection
 */

import React  from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Action01 extends React.Component {
	render () {
		return (
			/*<section id="call" className="bg-light-grey">*/

				<section id="call" className={this.props.color}>
					<Container>
						<Row>
							<Col md={12}>
								<div className="call1">
									<h3>{this.props.header}</h3>
									<p>{this.props.body}</p>
									<Link to={this.props.url}
									      className="ot-btn btn-main-color btn-rounded text-up white-text">
											{this.props.button} <i className="fa fa-arrow-circle-right" aria-hidden="true"> </i>
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
		)
	}
}

export default Action01
