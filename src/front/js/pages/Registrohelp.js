import React from "react";
import "../../styles/registrohelp.scss";
import RegisTrohelp from "../../img/RegisTrohelp2.png";

export const Registrohelp = () => {
	return (
		<div className="Container">
			<div className="row d-flex m-0 justify-content-center align-items-center">
				<div className="col-12 col-lg-6 text-center">
					<h4>Aquí puedes activar tu perfil para ayudar a otras persona</h4>
					<p>
						<img src={RegisTrohelp} className="img-fluid" />
					</p>
				</div>
				<div className="col-12 col-lg-6 text-center">
					<div className="card mx-auto ">
						<form>
							<button type="button" className="btn btn-primary m-3">
								activar
							</button>
							<button type="button" className="btn btn-primary m-3">
								Desactivar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
