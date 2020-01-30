/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/legal/privacy-policy.js
 */

import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../layout/index';
import SubHeader from '../../components/SubHeader/index';
import Subscribe from '../../components/Subscribe/index';
import config from '../../../data/SiteConfig';

const PrivacyPolicyView = ({location}) => {
	return (
		<Layout location={location} crumbLabel="Privacy Statement">
			<Helmet>
				<title>Privacy Statement</title>
				<meta name="description" content="The USVA represents the e-liquid manufacturers, device manufacturers,	wholesalers, distributors, vape shop owners, small business owners and entrepreneurs who have developed	innovative and quality vapor products" />
				<meta name="Keywords" content="United States Vaping Association, Vaping Association, Frequently Asked Questions" />
				<meta name="robots" content="index, nofollow, noarchive" />
			</Helmet>
			<SubHeader title={`Privacy Statement | ${config.siteTitle}`}
				crumbLink={'/legal/privacy-policy'} crumbLabel="Privacy Statement" />
			<section>
				<div className="container">
					<div className="row">

						<div className="heading-services">
							<p className="services-heading">
								Protecting your private information is our priority. This Statement of Privacy applies to www.theusva.org and United States Vaping Association and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to United States Vaping Association include www.theusva.org and The USVA. The USVA website is a Non-profit Trade Association site. By using the The USVA website, you consent to the data practices described in this statement.</p>
							<h1>Privacy Policy</h1>
						</div>
						<hr />

						<div className="legal-docs">

							<h3>Collection of your Personal Information</h3>

							<p>In order to better provide you with products and services offered on our Site, The USVA may collect personally identifiable information, such as your First and Last Name, Mailing Address, Email Address, Phone Number, Job Title, and Business definition.</p>

							<p>If you purchase The USVA's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.</p>

							<p>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through The USVA's public message boards, this information may be collected and used by others.</p>

							<p> We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or - personal information in the future.</p>

							<h3>Use of your Personal Information</h3>

							<p>The USVA collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p>

							<p>The USVA may also use your personally identifiable information to inform you of other products or services available from The USVA and its affiliates.</p>

							<h3>Sharing Information with Third Parties</h3>

							<p>The USVA does not sell, rent or lease its customer lists to third parties.</p>

							<p>The USVA may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. The USVA may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to The USVA, and they are required to maintain the confidentiality of your information.</p>

							<p>The USVA may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on The USVA or the site; (b) protect and defend the rights or property of The USVA; and/or (c) act under exigent circumstances to protect the personal safety of users of The USVA, or the public.</p>

							<h3>Tracking User Behavior</h3>

							<p>The USVA may keep track of the websites and pages our users visit within The USVA, in order to determine what The USVA services are the most popular. This data is used to deliver customized content and advertising within The USVA to customers whose behavior indicates that they are interested in a particular subject area.</p>

							<h3>Automatically Collected Information</h3>
							<p>Information about your computer hardware and software may be automatically collected by The USVA. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the The USVA website.</p>

							<h3>Links</h3>

							<p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

							<h3>Security of your Personal Information</h3>

							<p>The USVA secures your personal information from unauthorized access, use, or disclosure. The USVA uses the following methods for this purpose: SSL Protocol</p>

							<p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>

							<p>We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</p>

							<h3>Children Under Thirteen</h3>
							<p>The USVA does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>

							<h3>E-mail Communications</h3>

							<p>From time to time, The USVA may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other generalcommunication.If you would like to stop receiving marketing or promotional communications via email from The USVA, you may opt out of such communications by UNSUBSCRIBE button.</p>

							<h3>Changes to this Statement</h3>
							<p>The USVA reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy. </p>

							<h3>Contact Information</h3>

							<p>The USVA welcomes your questions or comments regarding this Statement of Privacy. If you believe that The USVA has not adhered to this Statement, please contact The USVA at:</p>

							<p>United States Vaping Association<br /> 100 E Whitestone BLVD 148<br /> Cedar Park, Texas 78613
							</p>

							<p>Effective as of July 26, 2019</p>

						</div>

					</div>
				</div>
			</section>
			<Subscribe />
		</Layout>
	);
};

export default PrivacyPolicyView;
