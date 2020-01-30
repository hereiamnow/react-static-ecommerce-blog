const K_WIDTH = 40;
const K_HEIGHT = 40;

const markerStyle = {
	// initially any map object has left top corner at lat lng coordinates
	// it's on you to set object origin to 0,0 coordinates
	position: 'absolute',
	width: K_WIDTH,
	height: K_HEIGHT,
	left: -K_WIDTH / 2,
	top: -K_HEIGHT / 2,
	border: '2px solid #deb152',
	borderRadius: K_HEIGHT,
	backgroundColor: '#f9f9f9',
	textAlign: 'center',
	fontSize: '1em',
	lineHeight: '2.5',
	fontWeight: 'bold',
	padding: '5px'
};

export {markerStyle};
