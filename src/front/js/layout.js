import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Context } from "../store/appContext";

//create your first component
const Layout = () => {
	//el nombre base se usa cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puede establecer el nombre de base en el archivo .env ubicado en la raíz de este proyecto, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{store.Demo.pagina === "2" ? (
					<ScrollToTop>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				) : (
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/demo">
								<Demo />
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
				)}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
