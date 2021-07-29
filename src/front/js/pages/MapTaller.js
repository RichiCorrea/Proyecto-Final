import React from "react";
import "../../styles/maptaller.scss";
import { ElMap } from "../component/map";
import Marker from "react-google-maps/lib/components/Marker";
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";

export const MapTaller = () => {
	return (
		<div className="Container">
			<div className="row  ">
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<ElMap>
						{TallerData.features.map(taller => (
							<Marker
								key={taller.properties.TALLER_ID}
								position={{ lat: taller.geometry.coordinates[0], lng: taller.geometry.coordinates[1] }}
							/>
						))}
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
