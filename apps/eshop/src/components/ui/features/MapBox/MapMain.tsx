import MapBox from "../../features/MapBox/MapBox";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";

const MapMain = () => {
  
  return (
    <div className=" text-black bg-white">
      <Grid container spacing={4}>
        {/* <Grid item xs={12} lg={6}>
          <div className="hidden lg:inline">
          <MapBox />
          </div>
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <div className="flex justify-center items-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="/main-car.png"
              alt="car image"
            />
          </div>
          <h1 className=" text-5xl text-center font-extrabold from-stone-700 italic">
            Enjoy Your Ride<br></br>
            <span className="text-orange-800">with Our </span> <br></br>{" "}
            Luxerious Premium Cars{" "}
          </h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default MapMain;
