import React from "react";
import "../../styles/maptaller.scss";
import maptaller from "../../img/maptaller.png";
import BikeMeAppTALLER from "../../img/BikeMeAppTALLER.png";

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
									<img src={BikeMeAppTALLER} />
								</p>
							</div>
							<div className="col-6">izquierda</div>
							<div className="col-6">derecha</div>
							<div className="col-6">izquierda</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
