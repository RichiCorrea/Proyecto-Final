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
				<h1>{taller.properties.NAME}</h1>
				<h2>{taller.properties.DESCRIPTIO}</h2>
				<p>{taller.properties.HORARIO}</p>
			</Popup>
		</Marker>
	));
	return markers;
};
