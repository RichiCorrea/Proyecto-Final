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
		<>
			<div className="Container">
				<div className="row  ">
					<div className="col-md-12 col-lg-6 text-center pt-5">
						<ElMap />
					</div>
				</div>
			</div>
		</>
	);
};
