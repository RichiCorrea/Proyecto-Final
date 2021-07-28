import NavLinks from "./NavLinks";
import { useState } from "react";
import "../../styles/navbar.scss";
import React from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);

	const hamburgerIcon = <TiThMenuOutline className="hamburger" onClick={() => setOpen(!open)} />;
	const closeIcon = <CgCloseR className="hamburger" onClick={() => setOpen(!open)} />;
	return (
		<nav className="MobileNavigation">
			{open ? closeIcon : hamburgerIcon}
			{open && <NavLinks />}
		</nav>
	);
};
export default MobileNavigation;
