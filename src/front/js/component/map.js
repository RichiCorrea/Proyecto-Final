import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
	return <GoogleMap defaultZoom={10} defaultCenter={{ lat: -33.4369436, lng: -70.634449 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const ElMap = () => {
	return (
		<div style={{ width: "40px", height: "40px" }}>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
					process.env.REACT_APP_GOOGLE_KEY
				}`}
				loadingElement={<div style={{ height: "40%" }} />}
				containerElement={<div style={{ height: "40%" }} />}
				mapElement={<div style={{ height: "40%" }} />}
			/>
		</div>
	);
};
