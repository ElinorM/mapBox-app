import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import './mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWxpbm9yYiIsImEiOiJjanlyYTdxd2UwOGNhM25ueXJpa2ZsaXBnIn0.yX3Eahp0I1wQn0rlD_vnBQ"
});

const MapBox = ({card, center, zoom, coordinates, geometryType}) => {
  //const center = [-77.01239, 38.91275];
  //let fitBounds = coordinates.reduce(function(bounds, coord) {
  //  return bounds.extend(coord);
  //}, MapboxGl.LngLatBounds(coordinates[0], coordinates[0]));
  //console.log(MapboxGl)
  const fillPaint =  {
        "fill-color": "#6FCF97",
        "fill-opacity": 0.5
  }

  const linePaint =  {
        "line-color": "#6FCF97",
        "line-opacity": 1,
        'line-width': 2
  }
  
  const circlePaint =   
    (geometryType === "Point") ? 
      {"circle-color": "#6FCF97"}
    : {"circle-color": "#6FCF97","circle-opacity": 0};
  
  return (
		<Map
        zoom={zoom}
        // eslint-disable-next-line
        style={"mapbox://styles/mapbox/dark-v10"}
        center={center}
        //fitBounds={fitBounds}
        containerStyle={{
        height: "100vh",
        width: "80vw"
      }}>
        <GeoJSONLayer 
          data={card.data} 
          fillPaint={fillPaint} 
          linePaint={linePaint} 
          circlePaint={circlePaint}
        />
      </Map>
	)
}

export default MapBox;