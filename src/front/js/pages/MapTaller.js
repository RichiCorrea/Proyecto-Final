import React, { useState } from "react";
import "../../styles/maptaller.scss";
import { ElMap } from "../component/map";
import {
	Marker,
	InfoWindow,
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	maps
} from "react-google-maps/lib/components/Marker";
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";

export const MapTaller = () => {
	const [selectedTaller, setSelectedTaller] = useState(null);
	return (
		<div className="Container">
			<div className="row  ">
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<ElMap>
						{TallerData.features.map(taller => (
							<Marker
								key={taller.properties.TALLER_ID}
								position={{ lat: taller.geometry.coordinates[0], lng: taller.geometry.coordinates[1] }}
								onClick={() => {
									setSelectedTaller(taller);
								}}
							/>
						))}

						{setSelectedTaller && (
							<InfoWindow
								position={{ lat: taller.geometry.coordinates[0], lng: taller.geometry.coordinates[1] }}
								onCloseClick={() => {
									setSelectedTaller(null);
								}}>
								<div>
									<h2>{selectedTaller.properties.NAME}</h2>
									<p>{selectedTaller.properties.DESCRIPTIO}</p>
									<p>{selectedTaller.propierties.HORARIO}</p>
								</div>
							</InfoWindow>
						)}
					</ElMap>
				</div>
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<div className="card">
						<ul className="">
							<li>
								<h3>San Eugenio 1502, Ñuñoa</h3>
							</li>
							<li>
								<h3>San Eugenio 1502, Ñuñoa</h3>
							</li>
							<li>
								<h3>San Eugenio 1502, Ñuñoa</h3>
							</li>
							<li>
								<h3>San Eugenio 1502, Ñuñoa</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
