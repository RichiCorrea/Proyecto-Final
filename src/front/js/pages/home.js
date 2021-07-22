import React, { useContext } from "react";
import { Context } from "../store/appContext";
import BikeMeApp from "../../img/BikeMeApp.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
										Email address
									</label>
									<input type="email" className="form-control" id="" />
								</div>
								<div className="col-12">
									<label htmlFor="inputPassword" className="form-label">
										Password
									</label>
									<input type="password" className="form-control" id="inputPassword" />
								</div>
								<div className="col-12">
									<button type="button" className="btn btn-primary m-3">
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
