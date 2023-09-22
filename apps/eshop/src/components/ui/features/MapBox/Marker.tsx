import React from "react";
import { Map, Marker } from "react-map-gl";
import Image from 'next/image'

const MapMarker = () => {
  return (
    <div>
      <Marker latitude={40} longitude={-100} anchor="bottom">
        {" "}
        <Image height={50} width={50} src="/location.png" alt="location" />{" "}
      </Marker>
    </div>
  );
};

export default MapMarker;
