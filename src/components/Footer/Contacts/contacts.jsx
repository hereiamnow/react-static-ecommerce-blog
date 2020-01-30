/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * Date: 12/05/2019 12:22 AM
 * GitRepo:
 * Relative Path: src/components/Footer/Contacts/contacts.jsx
 * Description: Component is a child of the Footer component.
 */

import React, { Component } from 'react';
import { Link } from 'gatsby';
import GoogleMap from '../../../components/GoogleMap';
import config from '../../../../data/SiteConfig';

const URL_TELE = 'tel:' + config.companyTelephone;
const URL_FAX = 'fax:' + config.companyFax;
const URL_EMAIL = 'mailto:' + config.emailSupport;

class Contacts extends Component {
	render () {
		const divStyle = {
			marginTop: '10px',
			height: 'auto',
			padding: '0',
			border: '1px solid #e5e5e5'
		};
		const mapCanvas = {
			height: '160px'
		};
		return (
			<div className="widget widget-footer">
				<div className="title-warp">
					<h3 className="title-inline"><Link to={'/contact'}>Contact Us</Link></h3>
				</div>
				<div className="contact-f1">
					<p>Telephone: <Link href={URL_TELE}>{config.companyTelephone}</Link></p>
					<p>Fax: <Link href={URL_FAX}>{config.companyFax}</Link></p>
					<p>E-mail: <Link href={URL_EMAIL}>{config.emailSupport}</Link></p>
					<div className="map-warp" style={divStyle}>
						<GoogleMap id={'map-canvas'} style={mapCanvas} />
					</div>
				</div>
			</div>
		);
	}
}

export default Contacts;
