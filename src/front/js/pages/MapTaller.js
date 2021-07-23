import React from "react";
import "../../styles/maptaller.scss";
import maptaller from "../../img/maptaller.png";
import BikeMeAppTALLER from "../../img/BikeMeAppTALLER.png";
import bici from "../../img/bici.png";
import estrella from "../../img/estrella.png";

export const MapTaller = () => {
	return (
		<div className="Container">
			<div className="row  ">
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<p>
						<img src={maptaller} />
					</p>
				</div>
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<div className="card">
						<div className="row">
							<div className="col-6">
								<p>
									<img className="help" src={BikeMeAppTALLER} />
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
		</div>
	);
};
