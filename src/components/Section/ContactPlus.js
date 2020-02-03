/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 1/30/2020 9:32 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Contact/Form1.js
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMap from '../../components/GoogleMap';

class ContactPlus extends React.Component {
	render () {
		const mapCanvas = {
			height: '380px'
		};
		return (
			<React.Fragment>
				<section id="contact" className={this.props.class}>
					<Container>
						<Row>
							<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" className="form-inline">
								<Col md={12}>
									<div className="title-warp">
										<h3 className="title-landing">Contact us</h3>
									</div>
								</Col>
								<div className="contact-form-landing">
									<Col md={4} className="form-group">
										<input className="form-control" name="yourName" id="yourName" placeholder="Your Name" type="text" />
									</Col>
									<Col md={4} className="form-group">
										<input className="form-control" name="yourEmail" id="yourEmail" placeholder="Your Email" type="email" />
									</Col>
									<Col md={4} className="form-group">
										<input className="form-control" name="yourPhone" id="phoneNumber" placeholder="Phone Number" type="text" />
									</Col>
									<Col md={12} className="input-content">
										<div className="form-group form-textarea">
											<textarea id="textarea" className="form-control" name="comments" rows="6" placeholder="Your Messages"> </textarea>
										</div>
									</Col>
									<button className="ot-btn btn-main-color ot-lg btn-submit-landing">Send Mail</button>
								</div>
							</form>
						</Row>
					</Container>
				</section>
				<section className="no-padding">
					<GoogleMap id={'map-canvas'} style={mapCanvas} />
				</section>
			</React.Fragment>
		);
	}
}

export default ContactPlus;