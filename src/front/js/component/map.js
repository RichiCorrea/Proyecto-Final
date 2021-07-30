import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
	return <GoogleMap defaultZoom={10} defaultCenter={{ lat: -33.4369436, lng: -70.634449 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const ElMap = () => {
	const [selectedTaller, setSelectedTaller] = useState(null);
	marker.setMap(null);
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBuoRKA_0DrSMck1D2CJu-PhgTZEXwB270`}
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "100%" }} />}
				mapElement={<div style={{ height: "100%" }} />}
			/>
		</div>
	);
};
