import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./OurLocation.styled";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const OurLocation = () => {
  return (
    <Styled.Main id="location">
      <h1 className="text-center text-3xl text-lime-500 font-semibold font-serif">
        <LocationOnIcon fontSize="large" />
        Our Location
      </h1>
      <h1 className="text-white text-center my-2">
        Our fleet is ready to transport you for all your business or events
        needs.
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className=" flex justify-center items-center mt-5">
            <div>
              <h1 className="text-white text-start text-3xl">
                Location List :
              </h1>
              <h1 className="text-orange-500 text-start text-xl my-2">
                {" "}
                <LocationOnIcon fontSize="medium" />
                1. Miami
              </h1>
              <h1 className="text-orange-500 text-start text-xl">
                <LocationOnIcon fontSize="medium" />
                2. Fort Lauderdale
              </h1>
              <h1 className="text-orange-500 text-start text-xl my-2">
                {" "}
                <LocationOnIcon fontSize="medium" />
                3. Palm Beach
              </h1>
              <h1 className="text-orange-500 text-start text-xl">
                {" "}
                <LocationOnIcon fontSize="medium" />
                4. Tampa
              </h1>
              <h1 className="text-orange-500 text-start text-xl my-2">
                {" "}
                <LocationOnIcon fontSize="medium" />
                5. Fort Myers
              </h1>
              <h1 className="text-orange-500 text-start text-xl">
                {" "}
                <LocationOnIcon fontSize="medium" />
                6. Naples
              </h1>
              <h1 className="text-orange-500 text-start text-xl my-2">
                {" "}
                <LocationOnIcon fontSize="medium" />
                7. Key West
              </h1>
              <h1 className="text-orange-500 text-start text-xl">
                {" "}
                <LocationOnIcon fontSize="medium" />
                8. Orlando
              </h1>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Styled.LocationImage
            width={0}
            height={0}
            sizes="100vw"
            src="/ourlocation.png"
            alt="locationimage"
          />
        </Grid>
      </Grid>
    </Styled.Main>
  );
};

export default OurLocation;
