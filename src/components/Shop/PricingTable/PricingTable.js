/**
 * Created by S. Miller <hereiamnow@gmail.com>
 * Date: 2/1/2020 12:19 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Shop/PricingTable/PricingTable.js
 * Description:
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PricingTableItem from './PricingTableItem';
import PricingTableItemFeatured from './PricingTableItemFeatured';

class PricingTable extends React.Component {
	render () {
		return (
				<section id="pricing-table">
					<Container>
						<Row>
							<div className="main-page-pricing-table">
								<Col md={12}>
									<h3>Pricing Table Set 1</h3>
								</Col>
								<div className="pricing-set-1 ">
									<Col md={4}>
										<PricingTableItem />
									</Col>
									<Col md={4}>
										<PricingTableItemFeatured />
									</Col>
									<Col md={4}>
										<PricingTableItem />
									</Col>
								</div>{/*pricing-set-1*/}
							</div>{/*main-page-pricing-table*/}
						</Row>
					</Container>
				</section>

		);
	}
}

export default PricingTable;
