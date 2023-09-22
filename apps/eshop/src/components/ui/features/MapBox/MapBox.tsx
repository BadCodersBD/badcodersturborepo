import React from "react";
import Map from "react-map-gl";
import MapMarker from "./Marker";

const MapBox = () => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoicmFraWJraGFuMDAxIiwiYSI6ImNsbXVtNW81NTBmNDUybG9jamd0ZmQ2Y2EifQ.TMLDTd5-YxNMFykK0Tf5xQ"
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: '100%', height: '500px' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <MapMarker/>
    </Map>
  );
};
export default MapBox;
