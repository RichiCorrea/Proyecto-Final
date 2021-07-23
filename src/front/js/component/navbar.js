import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">inicio</button>
				</Link>
				<Link to="/Registro">
					<button className="btn btn-primary">Registro</button>
				</Link>
			</div>
		</nav>
	);
};
