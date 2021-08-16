import React, {useState, useEffect} from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import * as TallerData from "/workspace/Proyecto-Final/src/data/Talleres.json";

export const MapLeaf = (props) => {
    const [state, setState] = useState({
        currentLocation: {
            lat: -33.4138,
            lng: -70.5833
        },
        zoom: 13,
        TallerData
    });
    const location = useLocation();
    const history = useHistory;

    useEffect(()=>{
        if (location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            };
            setState({
                ...state,
                currentLocation
            });
            history.replace({
                pathname: '/MapTaller',
                state: {}
            });
        };
    }, [location]);
    return (
        <div>
            <Map center={state.currentLocation} zoom={state.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                <Marker
                    Marker
					key={taller.properties.TALLER_ID}
					position={{
						lat: taller.geometry.coordinates[0],
						lng: taller.geometry.coordinates[1]
					}}
					onClick={() => {
						setSelectedTaller(taller);
					}}
					icon={{
						url: `/workspace/Proyecto-Final/src/front/img/311002.svg`
					}}
                />
            </Map>
        </div>
    );

};