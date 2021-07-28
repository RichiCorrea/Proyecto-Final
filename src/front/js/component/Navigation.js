import React from "react";
import "../../styles/navbar.scss";
import NavLinks from "./NavLinks";

const Navigation = () => {
	return (
		<nav className="d-none d-lg-flex Navigation">
			<NavLinks />
		</nav>
	);
};

export default Navigation;
