import React from 'react';
import PricingTableItem from './PricingTableItem';
import PricingTableItemFeatured from './PricingTableItemFeatured';

class PricingTable extends React.Component {
	render () {
		return (
				<section id="pricing-table">
					<div className="container">
						<div className="row">
							<div className="main-page-pricing-table">
								<div className="col-md-12">
									<h3>Pricing Table Set 1</h3>
								</div>
								<div className="pricing-set-1 ">
									<div className="col-md-4">
										<PricingTableItem />
									</div>
									<div className="col-md-4">
										<PricingTableItemFeatured />
									</div>
									<div className="col-md-4">
										<PricingTableItem />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

		);
	}
}

export default PricingTable;
