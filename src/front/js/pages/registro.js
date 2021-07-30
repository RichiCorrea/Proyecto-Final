import React from "react";
import "../../styles/registro.scss";

export const Registro = () => {
	return (
		<div className="Container">
			<div className="card mx-auto ">
				<form>
					<div className="row  m-3 text-white">
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label ">
								Nombre de usuario:
							</label>
							<input type="" className="form-control" id="" />
						</div>
						<div className="col-12">
							<label htmlFor="" className="form-label">
								Email:
							</label>
							<input type="email" className="form-control" id="" />
						</div>
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Contraseña:
							</label>
							<input type="password" className="form-control" id="inputPassword" />
						</div>
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Direccion:
							</label>
							<input type="password" className="form-control" id="inputPassword" />
						</div>
						<div className="col-12">
							Paises:
							<select id="inputState" className="form-control" value>
								<option selected>Seleciona Paises</option>
								<option value="santiago">Chile</option>
								<option value="santiago">Brasil</option>
								<option value="santiago">argentina</option>
							</select>
						</div>

						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Ciudad:
							</label>
							<input type="password" className="form-control" id="inputPassword" />
						</div>
						<div className="col-6">
							<button type="button" className="btn btn-primary m-3">
								Iniciar esion
							</button>
						</div>
						<div className="col-6">
							<button type="button" className="btn btn-primary m-3">
								Crear cuenta
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
