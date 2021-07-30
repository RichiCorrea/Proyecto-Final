import React, { useState, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";

function Map() {
	const [selectedTaller, setSelectedTaller] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setSelectedTaller(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

	return (
		<GoogleMap defaultZoom={10} defaultCenter={{ lat: -33.4138, lng: -70.5833 }}>
			{TallerData.features.map(taller => (
				<Marker
					key={taller.properties.TALLER_ID}
					position={{
						lat: taller.geometry.coordinates[0],
						lng: taller.geometry.coordinates[1]
					}}
					onClick={() => {
						setSelectedTaller(taller);
					}}
					icon={{
						url: `/workspace/Proyecto-Final/src/front/img/311002.svg`,
						scaledSize: new window.google.maps.Size(25, 25)
					}}
				/>
			))}

			{selectedTaller && (
				<InfoWindow
					onCloseClick={() => {
						setSelectedTaller(null);
					}}
					position={{
						lat: selectedTaller.geometry.coordinates[0],
						lng: selectedTaller.geometry.coordinates[1]
					}}>
					<div>
						<h2>{selectedTaller.properties.NAME}</h2>
						<p>{selectedTaller.properties.DESCRIPTIO}</p>
						<p>Horario: {selectedTaller.properties.HORARIO}</p>
						<p>Calificacion: {selectedTaller.properties.CALIFICACION}</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const ElMap = () => {
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
