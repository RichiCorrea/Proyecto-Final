import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export const Navbar = () => {
	const [nav, setNav] = useState({
		abierto: false
	});
	//console.log(nav.abierto);
	const abrir = () => {
		setNav(prevState => {
			return {
				...prevState,
				abierto: true
			};
		});
	};

	return (
		<div>
			<nav className="navbar">
				<Navigation />
				<MobileNavigation />
			</nav>
		</div>

		/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="logo">BikeMeApp</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<Link to="/demo">
							<button className="btn btn-primary mr-3">inicio</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Registro">
							<button className="btn btn-primary ">Registro</button>
						</Link>
					</li>
				</ul>
			</div> 
		</nav>*/

		// <nav className="navbar navbar-light ">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">Home</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary mr-3">inicio</button>
		// 		</Link>
		// 		<Link to="/Registro">
		// 			<button className="btn btn-primary ">Registro</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
