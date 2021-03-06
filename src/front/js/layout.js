import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Registro } from "./pages/registro";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import MapHelp from "./pages/MapHelp";
import { MapTaller } from "./pages/MapTaller";
import { Registrohelp } from "./pages/Registrohelp";
import { Registrotaller } from "./pages/Registrotaller";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/MapHelp">
							<MapHelp />
						</Route>
						<Route exact path="/MapTaller">
							<MapTaller />
						</Route>
						<Route exact path="/Registrohelp">
							<Registrohelp />
						</Route>
						<Route exact path="/Registrotaller">
							<Registrotaller />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
