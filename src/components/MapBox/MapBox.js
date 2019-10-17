import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import './mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWxpbm9yYiIsImEiOiJjanlyYTdxd2UwOGNhM25ueXJpa2ZsaXBnIn0.yX3Eahp0I1wQn0rlD_vnBQ"
});



const fillPaint = {
  'fill-color': 'red',
  'fill-opacity': 0.5
}

const MapBox = ({data}) => {
  //const center = [-77.01239, 38.91275];
  const center = [34.78093646063007,32.08063627522023];
	const number = [13];
  return (
		<Map
        zoom={number}
        style="mapbox://styles/mapbox/dark-v10"
        center={center}
        containerStyle={{
        height: "100vh",
        width: "80vw"
      }}>
        <GeoJSONLayer data={data} fillPaint={fillPaint}/>
      </Map>
	)
}

export default MapBox;