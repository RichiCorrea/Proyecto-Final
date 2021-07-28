import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

const NavLinks = () => {
	return (
		<ul>
			<li className="list-unstyled">
				<Link to="/" className="linkNavbar">
					Home
				</Link>
			</li>
			<li className="list-unstyled">
				<Link to="/Demo" className="linkNavbar">
					Demo
				</Link>
			</li>
			<li className="list-unstyled">
				<Link to="/Registro" className="linkNavbar">
					Registro
				</Link>
			</li>
			<li className="list-unstyled">
				<Link to="/Registrohelp" className="linkNavbar">
					Registro Help
				</Link>
			</li>
			<li className="list-unstyled">
				<Link to="/Registrotaller" className="linkNavbar">
					Registro Taller
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
