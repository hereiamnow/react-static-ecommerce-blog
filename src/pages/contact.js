import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout/index';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import GoogleMap from '../components/GoogleMap';
import FormInline from '../components/Contact';

class ContactPage extends React.Component {

	render () {
		const divStyle = {
			height: '400px',
			padding: '10px',
			border: '1px solid #e5e5e5'
		};
		const mapCanvas = {
			height: '380px'
		};
		return (
			<Layout>
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<SEO title="Contact - United States Vaping Association" keywords={['USVA', 'THEUSVA']} />
				<section>
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="left-contact">
									<h3>Few Words About Us</h3>
									<p>{config.aboutText}</p>
								</div>
								<div className="address-info">
									<p><i className="fa fa-globe color-theme" aria-hidden="true"> </i> {config.companyAddress}</p>
									<p><i className="fa fa-phone color-theme" aria-hidden="true"> </i> {config.companyTelephone}</p>
									<p><i className="fa fa-link color-theme" aria-hidden="true"> </i> {config.companySiteUrl}</p>
									<p><i className="fa fa-paper-plane color-theme" aria-hidden="true"> </i> {config.emailSupport}</p>
								</div>
							</div>
							{/*column*/}
							<div className="col-md-8">
								<div className="right-contact">
									<h3>Find Us On The Map</h3>
									<div className="map-warp" style={divStyle}>
										<GoogleMap id={'map-canvas'} style={mapCanvas} />
									</div>
									{/*map canvas*/}
									<div className="comment-form-warp">
										<h3>Drop Us a Line</h3>
										<FormInline />
									</div>
									{/*form*/}
								</div>
							</div>
							{/*column*/}
						</div>
						{/*row*/}
					</div>
					{/*container*/}
				</section>
			</Layout>
		);
	}
}

export default ContactPage;
