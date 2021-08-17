import React from "react";
import "../../styles/registrohelp.scss";
import RegisTrohelp from "../../img/RegisTrohelp2.png";

export const Registrohelp = () => {
	return (
		<div className="Container">
			<div className="row d-flex justify-content-center align-items-center">
				<div className="row col-12 col-lg-6 ">
					<div className="text-center">
						<h4>
							Proximamente aquí podrás activar tu perfil Help para ayudar a otras personas con problemas
							en ruta.
						</h4>
						<p>
							<img src={RegisTrohelp} className="img-fluid" />
						</p>
					</div>
				</div>
				<div className="col-12 col-lg-6 ">
					<div className="card mx-auto ">
						<form>
							<div className="row  m-3 text-white">
								<div className="col-12">
									<label htmlFor="inputPassword" className="form-label p-1">
										Rut:
									</label>
									<input
										type=""
										placeholder="XXXXXXXX-X"
										pattern="!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/"
										className="form-control"
										id=""
										required
									/>
								</div>
								<div className="col-12">
									<label htmlFor="inputPassword" className="form-label">
										Numero de telefono:
									</label>
									<input type="" className="form-control" id="" />
								</div>
								<div className="col-6">
									<button type="button" className="btn btn-primary m-3">
										Activar
									</button>
								</div>
								<div className="col-6">
									<button type="button" className="btn btn-primary m-3">
										Desactivar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
