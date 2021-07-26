import React from "react";
import "../../styles/maptaller.scss";

import maptaller from "../../img/maptaller.png";

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
