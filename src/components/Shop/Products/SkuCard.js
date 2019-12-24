/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/22/2019 12:04 AM
 * Relative Path: ${FILE_NAME}
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
