/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/05/2019 9:29 PM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/pages/terms-of-service.jsx
 */

import React from 'react'
import Helmet from "react-helmet";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from '../layout/layout1';
import SubHeader from '../components/SubHeader'
import Subscribe from '../components/Subscribe'

import config from '../../data/SiteConfig';

const TermsOfServiceView = (props) => (
		<Layout>
			<Helmet title={`Terms of Service | ${config.siteTitle}`} />
			<SubHeader pageTitle="Terms of Service - United States Vaping Association (USVA)" breadcrumb="Legal" />
			<section>
				<Container>
					<Row>

						<div className="heading-services">

							<p className="services-heading">
								This Membership Agreement (the Agreement) is effective July 26, 2019 by and between the
								The USVA, hereinafter referred to as Community, accessed via www.theusva.org with a
								business address of 100 E Whitestone BLVD 148, Cedar Park, Texas 78613, and all current
								and future members of The USVA hereinafter referred to as "Member". By accessing,
								browsing or using the www.theusva.org website or by selecting I Accept during the
								membership registration, you represent that you have read, understand and agree to be
								bound by the terms and conditions of this Membership Agreement hereinafter referred to
								as Agreement.</p>

							<h1>Membership Agreement & Refund Policy</h1>
						</div>

						<hr />

						<div className="legal-docs">
							<h3>1. Nature of the Service</h3>
							<p>The Community is a social network facilitating the exchange of personal information
							   between people. This socialization shall include reading the profile pages of other
							   members and possibly even contacting them. The Community provides to its members benefits
							   such as but not exclusive to: Legal Representation, Limited Legal Services. The Community
							   works like an online community of internet users.</p>

							<h3>2. User Registration and Information</h3>
							<p>Member shall fill in the correct information requested in the User Registration form on
							   the site. Member shall be required to promptly update the User Information on the site.
							   Member shall select a username and password during the User Registration process. Member
							   shall be responsible for: a) all use of the Site made by the Members username and
							   password, and b) maintaining the confidentiality of the Members username and
							   password.</p>

							<h3>3. Content</h3>
							<p>The Content includes messages and other materials posted to forums, groups, or other
							   locations on the Site by the members of the Community. Member of the Community is deemed
							   to grant the Community the nonexclusive right to post, display, copy, and modify the
							   Content in connection with the operation of the Site and the Community business. Further,
							   the Member is deemed to grant the Community the nonexclusive right to post, display,
							   copy, and sell the Content within the limitations set by the Member during the online
							   publishing process. Member is also deemed to authorize the Community to disclose his/her
							   personal data when the Member includes such personal data in the content.</p>

							<h3>4.Release</h3>
							<p>If the Member has a dispute with one or more other Members, the Member shall release
							   theCommunity (and its officers, directors, agents, subsidiaries, joint ventures and
							   employees) from claims, demands and damages (actual and consequential) of every kind and
							   nature, known and unknown, arising out of or in any way connected with such disputes.</p>

							<h3>5. Privacy</h3>
							<p>Community shall not sell or rent Members personal information to third parties without
							   Members explicit consent. Community shall store and process Members information on
							   computers located in the United States that are protected by physical as well as
							   technological security devices. However, the Community shall be permitted to access and
							   modify Members information.</p>

							<h3>6. Indemnity</h3>
							<p>Member shall indemnify and hold the Community (and its officers, directors, agents,
							   subsidiaries, joint ventures and employees) harmless from any claim or demand, including
							   reasonable attorneys'fees, made by any third party due to or arising out of Members
							   breach of this Agreement, or Members violation of any law or the rights of a third
							   party.</p>

							<h3>7.No Agency</h3>
							<p>No agency, partnership, joint venture, employee-employer or franchiser-franchisee
							   relationship is intended or created by this Agreement.</p>

							<h3>8. Terminating Membership</h3>
							<p>Member shall choose to retire or delete the published content from the Community site and
							   it shall be no longer available or visible to other visitors. Terms regarding the status
							   of the uploaded content shall remain applicable when the Member chooses to terminate the
							   membership. Content posted to the site, other than the published content, shall not be
							   deleted or retired as a result of theMembers termination.</p>

							<h3>9. Governing Law</h3>
							<p>This Agreement shall be construed under and governed in accordance with the laws of the
							   Texas.</p>

							<h3>10. Arbitration.</h3>
							<p>Any dispute arising under this contract shall be resolved under the commercial
							   arbitration rules of the American Arbitration Association.</p>

							<h3>11. Limitation of Liability</h3>
							<p>Member shall not hold Community responsible for other user Members content, actions or in
							   actions.</p>
							<p>The USVA<br /> www.theusva.org Effective July 26, 2019</p>

						</div>

						<div className="legal-docs">
							<h2>REFUND POLICY</h2>
							<p>Thank you for your membership with The United States Vaping Association. Please read this
							   policy carefully. This is the Refund Policy of The United States Vaping Association.
							   Membership FeesThe USVA will not issue refunds on membership fees. As a member of The
							   USVA you will gain access to privileged information not available to non-members. This
							   information will be shared as soon as a member has agreed to the terms The USVA has put
							   forth. If for any reason a member is not satisfied with the service, they may cancel
							   renewal and forfeit their right to legal representation. We recommend contacting us for
							   assistance if you experience any issues with our services or have trouble accessing
							   information on social media or on the website www.TheUSVA.org</p>

							<h2>ONE-TIME DONATIONS</h2>
							<p>One-time donations may be cancelled within 1 business day by contacting The USVA with a
							   request for a refund. By clicking "Submit" on the donation page, user agrees to the terms
							   of service of The USVA. The USVA encourages donors to allow the organization to solve a
							   dispute with payment and allow us 48 hours to issue a refund once approved. Charge-backs
							   issued by banks without meetings these conditions provided for a refund will be disputed
							   by The USVA.</p>

							<h2>CANCELLATIONS</h2>
							<p>A paying member of The USVA may, at any time, terminate membership for any reason. It is
							   the responsibility of the user to cancel prior to renewal date to avoid additional
							   charges. If user fails to cancel prior to renewal they are subject to previous terms
							   regarding membership fees. The USVA is not responsible for managing user membership
							   renewal and user shall be held responsible for any changes made to their account. By
							   cancelling your membership, you acknowledge that you will be removed from any legal
							   documents filed in the courts by The USVA. Contact us If you have any questions about our
							   Refund Policy, please contact us at membership@theusva.org</p>
						</div>
					</Row>
				</Container>
			</section>
			<Subscribe/>
		</Layout>
)

export default TermsOfServiceView
