import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import BikeMeApp from "../../img/BikeMeApp3.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	console.log("This is your token", store.token);
	const handleClick = () => {
		actions.login(email, password);
	};

	function validar() {
		var Correo = document.getElementById("inputEmail").value;
		var Contraseña = document.getElementById("inputPassword").value;
		var ocultar = document.getElementById("my DIV");
		var aparecer = document.getElementById("myH1");
		if (
			Correo != "null" &&
			Correo == "richi.correa.f@gmail.com" &&
			Contraseña != "null" &&
			Contraseña == "esmerilemelo"
		) {
			(ocultar.style.display = "none"), (aparecer.style.display = "block");
		} else if (
			Correo != "null" &&
			Correo == "gabo.angel123@gmail.com" &&
			Contraseña != "null" &&
			Contraseña == "123456"
		) {
			(ocultar.style.display = "none"), (aparecer.style.display = "block");
		} else if (
			Correo != "null" &&
			Correo == "bikemeapp.com@gmail.com" &&
			Contraseña != "null" &&
			Contraseña == "4GeeksAcademy"
		) {
			(ocultar.style.display = "none"), (aparecer.style.display = "block");
			/* history.push("/demo") */
		} else {
			alert("Verifique sus credenciales");
		}
	}

	if (store.token && store.token != "" && store.token != undefined) history.push("/demo");

	return (
		<div className="Container">
			<div className="row d-flex justify-content-center align-items-center">
				<div className="col-10 py-5 col-lg-6 text-center">
					{/* 					<h1 ">BikeMeApp</h1> */}
					<p>
						<img src={BikeMeApp} className="img-fluid" />
					</p>
					<h2 className="titulo" id="myH1" style={{ display: "none", color: "#41DABF" }}>
						Que el viento sea tu única oposición
					</h2>
				</div>

				<div className="row d-flex justify-content-center">
					<div className="card col-10" id="my DIV" style={{ display: "block" }}>
						{store.token && store.token != "" && store.token != undefined ? (
							"You are logged in with this token" + store.token
						) : (
							<form className="row col-11">
								<div>
									<div className="col-12">
										<label htmlFor="" className="text-white form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail"
											placeholder="email@Address.com"
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>
									<div className="col-12">
										<label htmlFor="inputPassword" className="text-white form-label">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword"
											placeholder="password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
									<div className="col-12 pt-2 text-center">
										<button type="button" className="text-white btn btn-primary" onClick={validar}>
											Iniciar sesion
										</button>
									</div>
									<div className="col-12">
										<h5 className="text-white">¿Olvidaste tu contraseña?</h5>
									</div>
									<div className="col-12 text-center">
										<button type="button" className="text-white btn btn-primary">
											Crear cuenta
										</button>
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
