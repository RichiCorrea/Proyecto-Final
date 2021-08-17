import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";
import { useLocation, useHistory } from "react-router-dom";

export const MapView = props => {
	const [state, setState] = useState({
		currentLocation: { lat: "-33.4138", lng: "-70.5833" },
		zoom: 13
	});

	return (
		<MapContainer center={state.currentLocation} zoom={state.zoom}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
			<Markers data={TallerData} />
		</MapContainer>
	);
};
