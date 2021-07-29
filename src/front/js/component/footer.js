import React from "react";
import "../../styles/footer.scss";
import googleplay from "../../img/googleplay.png";
import appstoreaple from "../../img/appstoreaple.png";

export const Footer = () => (
	<div>
		<footer className="footer d-flex align-items-center justify-content-center pt-3">
			<div className="container">
				<div className="row d-flex justify-content-between text-center text-xs-center text-sm-left text-md-left py-3">
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5 className="text-white">MENU</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="">FUNCIONES</a>
							</li>
							<li>
								<a href="">SUSCRIPCIÓN</a>
							</li>
							<li>
								<a href="">QUIÉNES SOMOS</a>
							</li>
							<li>
								<a href="">BLOG</a>
							</li>
							<li>
								<a href="">AYUDA</a>
							</li>
						</ul>
					</div>

					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5 className="text-white">SEGUIR</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="">
									<i className="fab fa-facebook-square p-2" />
									FACEBOOK
								</a>
							</li>
							<li>
								<a href="">
									<i className="fab fa-instagram p-2" />
									INSTAGRAM
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/bikemeapp/">
									<i className="fab fa-twitter p-2" />
									TWITTER
								</a>
							</li>
							<li>
								<a href="" title="Design and developed by">
									<i className="fab fa-youtube p-2" />
									YOUTUBE
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5 className="text-white">COMO COMENZAR</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<a href="">
									<img className="help p-0" src={appstoreaple} />
								</a>
							</li>
							<li>
								<a href="">
									<img className="help p-0" src={googleplay} />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr />

				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
						<p>
							<u>
								<a href="https://www.nationaltransaction.com/" />
							</u>
							© 2021 BikeMeApp, Inc. All rights reserved
						</p>
					</div>
					<hr />
				</div>
			</div>
		</footer>
	</div>
);
