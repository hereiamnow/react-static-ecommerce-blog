/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/30/2020 1:18 AM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Forms/Contact.js
 * Description:
 */

import React from 'react';

class Contact extends React.Component {
	render () {
		return (
			/*Netlify Form Handler*/
			<form
				name="contact"
				method="post"
				action="/success"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				className="form-inline" >
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="contact" />

				<div className="left-form-comment">
					<div className="form-group">
						<input type="text" className="form-control" id="exampleInputName2" placeholder="Your Name..." />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" id="exampleInputEmail2" placeholder="Your Email" />
					</div>
					<button type="submit" className="ot-btn btn-main-color btn-rounded bg-theme text-up white-text">
						SEND MESSAGE <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
					</button>
				</div>
				<div className="right-form-comment">
					<textarea name="message" id="textarea" className="form-control" rows="7" required="required" placeholder="Your Message"> </textarea>
				</div>
			</form>
		);
	}
}

export default Contact;