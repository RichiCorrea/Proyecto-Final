import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import BikeMeApp from "../../img/BikeMeApp.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const opts = {
			method: "POST",
			Headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};
		fetch("https://3000-amber-stingray-xdjmtvct.ws-us11.gitpod.io/api/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("there has been some error");
			})
			.then()
			.catch(error => {
				console.error("there was an error!!!", error);
			});
	};

	return (
		<div className="Container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  text-center">
					<h1 className="titulo">BikeMeApp</h1>
					<p>
						<img src={BikeMeApp} />
					</p>
				</div>

				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pt-5">
					<div className="card ml-3 mb-3">
						<form>
							<div className="row justify-content-center m-3">
								<div className="col-12">
									<label htmlFor="" className="form-label">
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
									<label htmlFor="inputPassword" className="form-label">
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
								<div className="col-12">
									<button type="button" className="btn btn-primary m-3" onClick={handleClick}>
										Iniciar esion
									</button>
								</div>
								<div className="col-12">
									<h5>¿Olvidaste tu contraseña?</h5>
								</div>
								<div className="col-12">
									<button type="button" className="btn btn-primary m-3">
										Crear cuenta
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

//    <div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImageUrl} />
// 		</p>
// 		<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
// 		<p>
// 			This boilerplate comes with lots of documentation:{" "}
// 			<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
// 				Read documentation
// 			</a>
// 		</p>
// 	</div>
