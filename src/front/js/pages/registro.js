import React from "react";
import "../../styles/registro.scss";

export const Registro = () => {
	return (
		<div className="Container">
			<div className="card mx-auto ">
				<form>
					<div className="row  m-3 text-white">
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label p-1">
								Nombre de usuario
							</label>
							<input type="text" placeholder="Usuario" className="form-control" id="" required />
						</div>
						<div className="col-12">
							<label htmlFor="" className="form-label">
								Email
							</label>
							<input
								type="email"
								placeholder="email@Address.com"
								className="form-control"
								id=""
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Contraseña
							</label>
							<input
								type="password"
								placeholder="Contraseña"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Debe contener al menos 8 caracteres con un número, una letra mayúscula y una minúscula"
								className="form-control"
								id="inputPassword"
								required
							/>
						</div>
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Dirección
							</label>
							<input
								type=""
								placeholder="Dirección con numeración 123"
								className="form-control"
								id="inputPassword"
								required
							/>
						</div>
						<div className="col-12">
							Paises
							<select id="inputState" className="form-control" value>
								<option selected>Seleciona Paises</option>
								<option value="santiago">Chile</option>
								<option value="santiago">Brasil</option>
								<option value="santiago">argentina</option>
							</select>
						</div>

						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Ciudad
							</label>
							<input type="" placeholder="Ciudad" className="form-control" id="inputPassword" required />
						</div>
						<div className="col-9">
							<a href="/">
								<button type="button" className="btn btn-primary m-3">
									Volver al inicio de sesión
								</button>
							</a>
						</div>
						<div className="col-2">
							<input type="submit" className="btn btn-primary m-3 position-relative" value="enviar" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
