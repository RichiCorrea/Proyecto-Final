import React from "react";
import Maphelp from "../../img/Maphelp.png";
import "../../styles/maphelp.scss";
import BikeMeAppHELP from "../../img/BikeMeAppHELP.png";
import bici from "../../img/bici.png";
import estrella from "../../img/estrella.png";
import { ElMap } from "../component/map";

export const MapHelp = () => {
	return (
		<div className="Container row text-center d-flex justify-content-center align-items-center">
			<div className="col-12 col-lg-9 pb-5">
				<ElMap />
			</div>

			<div className="col-9 col-lg-3 text-center pt-3">
				<div className="tarjeta d-flex align-items-center row">
					<div className="row col-12">
						<div className="col-6">
							<p>
								<img className="help img-fluid" src={BikeMeAppHELP} />
							</p>
						</div>
						<div className="col-6 text-white">
							<h2>En camino en 15 min</h2>
						</div>
					</div>
					<div className="row col-12">
						<div className="col-6">
							<p>
								<img className="img-fluid" src={bici} />
							</p>
						</div>
						<div className="col-6">
							<p>
								<img className="img-fluid" src={estrella} />
							</p>
							<h3>7.5</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
