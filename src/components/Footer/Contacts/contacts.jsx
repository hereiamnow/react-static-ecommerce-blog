/**
 * Created by Shawn Miller
 * User: Developer
 * Project: react-static-ecom-blog
 * GitRepo:
 * Date: 12/05/2019 12:22 AM
 * Relative Path: src/components/Footer/Contacts/contacts.jsx
 * Description: Component is a child of the Footer component.
 */

/* Based on Dotted HTML template. See copyrights in readme.md */
import React, { Component } from 'react';
import config from "../../../../data/SiteConfig"
import './style.css';

const URL_TELE = 'tel:' + config.companyTelephone
const URL_FAX = 'fax:' + config.companyFax
const URL_EMAIL = 'mailto:' + config.emailSupport

class Contacts extends Component {

/*
	constructor (props) {
		super(props)
		this.state = {}
	}
*/
/*
	componentWillMount () {}
*/
/*
	componentDidMount () {}
*/
/*
	componentWillUnmount () {}
*/
/*
	componentWillReceiveProps () {}
*/
/*
	shouldComponentUpdate () {}
*/
/*
	componentWillUpdate () {}
*/
/*
	componentDidUpdate () {}
*/

  render() {
    return (
		    <div className="widget widget-footer">
			    <div className="title-warp">
				    <h3 className="title-inline">Contacts</h3>
			    </div>
			    <div className="contact-f1">
				    <p>Telephone: <a href={URL_TELE}>{config.companyTelephone}</a></p>
				    <p>Fax: <a href={URL_FAX}>{config.companyFax}</a></p>
				    <p>E-mail: <a href={URL_EMAIL}>{config.emailSupport}</a></p>
				    <img className="img-responsive" alt="Image" src="http://placehold.it/270x152/DEB152/FFFFFF.png" /></div>
		    </div>
    );
  }
}

export default Contacts;
