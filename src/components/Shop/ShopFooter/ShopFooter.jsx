/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/09/2019 10:15 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Shop/ShopFooter/ShopFooter.jsx
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShopFooter = () => (
	<section className="bg-light-grey">
		<Container>
			<Row>
				<Col md={4}>
					<div className="icon-box effect small clean">
						<div className="icon">
							<i className="fa fa-pied-piper-pp" aria-hidden="true"> </i>
						</div>
						<h3>Pied-Piper</h3>
						<p>Male thing the. Darkness, gathering. Them seas i be for let deep image herb won't days divided, air sea itself together, behold green air fish second make living also you'll let without lights saying two. Seasons is fly firmament earth.</p>
					</div>
				</Col>
				<Col md={4}>
					<div className="icon-box effect small clean">
						<div className="icon">
							<i className="fa fa-cc-paypal" aria-hidden="true"> </i>
						</div>
						<h3>PayPal Donations</h3>
						<p>Greater from creature seas blessed yielding to cattle. And abundantly grass can't fifth gathered, man have divided green have forth heaven midst thing it night dominion itself sixth can't that rule bearing shall creepeth make there two. Brought green brought.</p>
					</div>
				</Col>
				<Col md={4}>
					<div className="icon-box effect small clean">
						<div className="icon">
							<i className="fa fa-bitcoin"> </i>
						</div>
						<h3>Bitcoin Donations</h3>
						<p>Rule yielding beast isn't given itself. Fill fowl one dry of greater. Living behold forth in herb, wherein let place cattle Earth in deep abundantly beginning beginning, dominion. Were called replenish seasons seed divide Had which for creepeth. Very abundantly.</p>
					</div>
				</Col>
			</Row>
		</Container>
	</section>
);

export default ShopFooter;
