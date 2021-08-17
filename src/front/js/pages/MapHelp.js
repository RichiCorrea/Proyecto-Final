import React, { useState, useEffect } from "react";
import "../../styles/maphelp.scss";
import BikeMeAppHELP from "../../img/BikeMeAppHELP.png";
import bici from "../../img/bici.png";
import estrella from "../../img/estrella.png";
import { MapView } from "../component/MapLeaf2";
import { Link } from "react-router-dom";
const MapHelp = () => {
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
		<div className="Container row text-center d-flex justify-content-center align-items-center">
			<div className="col-12 col-lg-9 pb-5" />
			<MapView />
			<div className="col-md-12 col-lg-6 text-center pt-5">
				<div className="card">
					<div className="row text-white">
						<div className="col-6">
							<p>
								<img className="help" src={BikeMeAppHELP} />
								<Link to={{ state }}>Ver mi Ubicación</Link>
								<p>Latitud: {state.latitude}</p>
								<p>Longitud: {state.longitude}</p>
							</p>
						</div>
						<div className="col-6 pt-5">
							<h2>En camino en 15 min</h2>
						</div>
						<div className="col-6">
							<p>
								<img className="bici" src={bici} />
							</p>
						</div>
						<div className="col-6 ">
							<div className="nota">
								<p>
									<img className="help " src={estrella} />
								</p>
								<h3>7.5</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MapHelp;
