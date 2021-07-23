import React from "react";
import Maphelp from "../../img/Maphelp.png";
import "../../styles/maphelp.scss";

export const MapHelp = () => {
	return (
		<div className="Container">
			<div className="row ">
				<div className="col-md-12 col-lg-6 text-center pt-5">
					<p>
						<img src={Maphelp} />
					</p>
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
