import React from "react";

export const InitMap = () => {
	var myloc = { lat: 38.3, lng: 36.3 };
	var myopt = {
		center: myloc,
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googlemap", myopt));

	var directionService = new google.maps.Map.DirectionsService();

	var directionDisplay = new google.maps.Map.DirectionsRenderer();

	directionDisplay.setMap(map);

	function calcRoute() {
		var request = {
			origin: document.getElementById("from").value,
			destination: document.getElementById("to").value,
			travelMode: google.maps.TravelMode.DRIVING,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		};
	}

	directionService.route(request, (result, status) => {
		if (status == google.maps.DirectionsStatus.OK) {
			const output = document.querySelector("#output");
			output.innerHTML =
				"<div className='alert-info' Desde: " +
				document.getElementById("from").value +
				".<br />Hacia: " +
				document.getElementById("to").value +
				". <br /> Distancia de Manejo: " +
				result.routes[0].legs[0].distance.text +
				".<br />Duracion: " +
				result.routes[0].legs[0].duration.text +
				". </div>";

			directionDisplay.setDirections(result);
		} else {
			directionDisplay.setDirections({ routes: [] });
			map.setCenter(myloc);
			output.innerHTML = "<div className='alert-danger'> No se pudo calcular la ruta. </div>";
		}
	});

	var options = {
		types: ["(ciudades)"]
	};

	var input1 = document.getElementById("from");
	var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

	var input2 = document.getElementById("to");
	var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

	return (
		<div className="jumbotron">
			<div className="container-fluid">
				<h1>El Mapa</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-xs-4">
							<input type="text" id="from" placeholder="origin" />
						</div>
					</div>

					<div className="form-group">
						<div className="col-xs-4">
							<input type="text" id="to" placeholder="destiny" />
						</div>
					</div>
					<div className="container-fluid">
						<div className="googlemap" />
						<div className="output" />
					</div>
				</form>
			</div>
		</div>
	);
};
