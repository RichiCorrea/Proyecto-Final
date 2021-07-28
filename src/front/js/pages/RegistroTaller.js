import React from "react";
import "../../styles/registrotaller.scss";

export const Registrotaller = () => {
	return (
		<div className="Container">
			<div className="row">
				<div className="col-6">
					<h4>Aquí puedes activar tu perfil para ayudar a otras persona</h4>
					<p />
				</div>
				<div className="col-6">
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
