/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 1/30/2020 9:32 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Contact/Form1.js
 * Description:
 */

import React from 'react';
import GoogleMap from '../../components/GoogleMap';

class ContactPlus extends React.Component {
	render () {
		const mapCanvas = {
			height: '380px'
		};
		return (
			<React.Fragment>
				<section id="contact" className={this.props.class}>
					<div className="container">
						<div className="row">
							<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" className="form-inline">
								<div className="col-md-12">
									<div className="title-warp">
										<h3 className="title-landing">Contact us</h3>
									</div>
								</div>
								<div className="contact-form-landing">
									<div className="form-group col-md-4 ">
										<input className="form-control" name="yourName" id="yourName" placeholder="Your Name" type="text" />
									</div>
									<div className="form-group col-md-4">
										<input className="form-control" name="yourEmail" id="yourEmail" placeholder="Your Email" type="email" />
									</div>
									<div className="form-group col-md-4">
										<input className="form-control" name="yourPhone" id="phoneNumber" placeholder="Phone Number" type="text" />
									</div>
									<div className="input-content col-md-12">
										<div className="form-group form-textarea">
											<textarea id="textarea" className="form-control" name="comments" rows="6" placeholder="Your Messages"></textarea>
										</div>
									</div>
									<button className="ot-btn btn-main-color ot-lg btn-submit-landing">Send Mail</button>
								</div>
							</form>
						</div>
					</div>
				</section>
				<section className="no-padding">
					<GoogleMap id={'map-canvas'} style={mapCanvas} />
				</section>
			</React.Fragment>
		);
	}
}

export default ContactPlus;