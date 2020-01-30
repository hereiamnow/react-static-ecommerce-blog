/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 1/29/2020 12:24 PM
 * Project: https://react-static-ecommerce-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecommerce-blog.git
 * Relative Path: src/components/GoogleMap/GoogleMap.js
 */
import React from 'react';
import GoogleMap from 'google-map-react';
import Config from '../../../data/SiteConfig.js'
import {markerStyle} from './marker-styles';
function createMapOptions(maps) {
	// next props are exposed at maps
	// "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
	// "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
	// "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
	// "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
	// "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
	return {
		zoomControlOptions: {
			position: maps.ControlPosition.RIGHT_CENTER,
			style: maps.ZoomControlStyle.SMALL
		},
		mapTypeControlOptions: {
			position: maps.ControlPosition.TOP_RIGHT
		},
		mapTypeControl: true
	};
}

const defaultProps = {
	center: {
		lat: 30.522160,
		lng: -97.830190,
	},
	zoom: 5,
};

const Label = ({text}) => <div style={markerStyle}> {text} </div>;

const BaseMap = (props) => (
	<div id={props.id} style={props.style}>
		<GoogleMap
			bootstrapURLKeys={{key: Config.googleCloudPlatformAPIKey}}
			defaultCenter={defaultProps.center}
			defaultZoom={defaultProps.zoom}
			>
			<Label  lat={30.522160} lng={-97.830190} text={'USVA'} /* USVA */ />
		</GoogleMap>
	</div>
)

export default BaseMap;
