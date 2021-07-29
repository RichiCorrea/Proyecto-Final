import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<Navigation />
				<MobileNavigation />
			</nav>
			<div className="mb-5" />
		</div>
	);
};
