import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";
export const Markers = props => {
	const { Talleres } = props;
	const markers = TallerData.features.map((taller, i) => (
		<Marker
			key={i}
			position={{ lat: taller.geometry.coordinates[0], lng: taller.geometry.coordinates[1] }}
			icon={IconLocation}>
			<Popup>
				<h7>{taller.properties.NAME}</h7>
				<br />
				<h8>{taller.properties.DESCRIPTIO}</h8>
				<h9>{taller.properties.HORARIO}</h9>
			</Popup>
		</Marker>
	));
	return markers;
};
