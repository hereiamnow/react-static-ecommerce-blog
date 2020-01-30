import React from 'react';
import PropTypes from 'prop-types'
import shouldPureComponentUpdate from 'react-pure-render/function';

import {markerStyle} from './marker-styles';

export default class MapMarker extends React.Component {
	static propTypes = {
		text: PropTypes.string
	};

	static defaultProps = {};

	shouldComponentUpdate = shouldPureComponentUpdate;

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={markerStyle}>
				{this.props.text}
			</div>
		);
	}
}
