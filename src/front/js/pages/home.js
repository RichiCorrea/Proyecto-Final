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

	if (store.token && store.token != "" && store.token != undefined) history.push("/demo");

	return (
		<div className="Container w-100 m-0 py-5">
			<div className="row d-flex m-0 justify-content-center align-items-center">
				<div className="col-12 col-lg-6 text-center">
					{/* 					<h1 className="titulo">BikeMeApp</h1> */}
					<p>
						<img src={BikeMeApp} className="img-fluid" />
					</p>
				</div>

				<div className="row d-flex justify-content-center py-5">
					<div className="card col-12 col-lg-12">
						{store.token && store.token != "" && store.token != undefined ? (
							"You are logged in with this token" + store.token
						) : (
							<form className="col-11 py-2">
								<div>
									<div className="col-12">
										<label htmlFor="" className="text-white form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id=""
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
									<div className="col-12 pt-2">
										<button
											type="button"
											className="text-white btn btn-primary"
											onClick={handleClick}>
											Iniciar sesion
										</button>
									</div>
									<div className="col-12">
										<h5 className="text-white">¿Olvidaste tu contraseña?</h5>
									</div>
									<div className="col-12">
										<button type="button" className="text-white btn btn-primary ">
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
