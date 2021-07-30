import React, { useState } from "react";
import "../../styles/maptaller.scss";
import { ElMap } from "../component/map";

export const MapTaller = () => {
	const [selectedTaller, setSelectedTaller] = useState(null);
	return (
		<>
			<div className="Container">
				<div className="row  ">
					<div className="col-md-12 col-lg-12 text-center pt-5">
						<ElMap />
					</div>
				</div>
			</div>
		</>
	);
};
