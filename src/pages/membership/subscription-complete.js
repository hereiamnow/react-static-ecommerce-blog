import React from 'react';
import PropTypes from 'prop-types';

const PaypalSubscriptionCompletePage = ({orderID, subscriptionID}) => (
		<div className="wrapper">
			<h3 className="class-name">SubscriptionComplete</h3>
			<p>{orderID}, {subscriptionID}</p>
		</div>
);

PaypalSubscriptionCompletePage.propTypes = {
	orderID: PropTypes.string.isRequired,
	subscriptionID: PropTypes.string.isRequired
};

export default PaypalSubscriptionCompletePage;
