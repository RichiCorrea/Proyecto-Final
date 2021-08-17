import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/maptaller.scss";
import { MapView } from "../component/MapLeaf2";
export const MapTaller = () => {
	const [selectedTaller, setSelectedTaller] = useState(null);
	const [state, setState] = useState({
		longitude: 0,
		latitude: 0
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				setState({
					longitude: position.coords.longitude,
					latitude: position.coords.latitude
				});
			},
			function(error) {
				console.log(error);
			},
			{
				enableHighAccuracy: true
			}
		);
	});
	return (
		<div className="Container">
			<div className="row  ">
				<MapView />

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
