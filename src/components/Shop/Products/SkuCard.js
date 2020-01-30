/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/22/2019 12:04 AM
 * Project: react-static-ecommerce-blog - a site built for gatsby
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/Shop/Products/SkuCard.js
 * Description:
 */
import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SkuCard from './SkuCard';

const conatinerStyles = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	padding: '1rem 0 1rem 0',
};

class Skus extends Component {
	state = {
		stripe: null,
	};

	// Initialise Stripe.js with your publishable key.
	// You can find your key in the Dashboard:
	// https://dashboard.stripe.com/account/apikeys
	componentDidMount () {
		const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
		this.setState({stripe});
	}

	render () {
		return (
				<StaticQuery  render={({skus}) => (
						<div style={conatinerStyles}>
							{skus.edges.map(({node: sku}) => (
									<SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
							))}
						</div>
				)} />
		);
	}
}

export default Skus;
