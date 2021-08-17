import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BikeMeAppHELP from "../../img/BikeMeAppHELP.png";
import BikeMeAppTALLER from "../../img/BikeMeAppTALLER.png";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="demoContainer container-fluid ">
			<div className="row">
				<div className="col-12 col-lg-12 text-center text-white">
					<h1 className="text-center ">¿Qué tipo de servicio necesitas?</h1>
				</div>

				<div className="col-6 col-lg-6 text-center text-white">
					<h5 className="text-center " />
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-lg-6 text-center text-white">
					<h4 className="text-center" style={{ color: "white" }}>
						Help: un técnico que puede ir a tu ubicación y realizar reparaciones en ruta.
					</h4>

					<Link to="/MapHelp">
						<p>
							<img src={BikeMeAppHELP} className="img-fluid" />{" "}
						</p>
					</Link>
				</div>
				<div className="col-12 col-lg-6 text-center text-white">
					<h4 className="text-center" style={{ color: "white" }}>
						Taller: puedes verificar los talleres de bicicletas cercanos a tu ubicación.
					</h4>
					<Link to="/MapTaller">
						<button className="btn">
							<p>
								<img src={BikeMeAppTALLER} className="img-fluid" />
							</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

{
	/* <div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div> */
}
