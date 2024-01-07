import { Styled } from "./PlanTrip.styled";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";

const PlanTrip = () => {
  return (
    <Styled.Main>
      <div className="p-10">
        <h1 data-aos="fade-left" className="text-center text-2xl font-semibold">
          Plan Your Trip Now
        </h1>
        <h1
          data-aos="fade-right"
          className="text-center text-4xl font-bold py-5"
        >
          Quick And Easy Car Rental
        </h1>
        <Grid data-aos="zoom-out-up" container spacing={4}>
          <Grid item xs={12} lg={4}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/plan/icon1.png"
                alt="plan"
                width={200}
                height={200}
                sizes="100vw"
              />
              <h1 className="text-2xl font-bold">Select Car</h1>
              <h1 className="text-lg text-center opacity-95">
                We offer a Big range of Vehicles for all your Driving needs.We
                have the perfect car to your needs.
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/plan/icon2.png"
                alt="plan"
                width={200}
                height={200}
                sizes="100vw"
              />
              <h1 className="text-2xl font-bold">Contact Operator</h1>
              <h1 className="text-lg text-center opacity-95">
                We offer a Big range of Vehicles for all your Driving needs.We
                have the perfect car to your needs.
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/plan/icon3.png"
                alt="plan"
                width={200}
                height={200}
                sizes="100vw"
              />
              <h1 className="text-2xl font-bold">Lets Drive</h1>
              <h1 className="text-lg text-center opacity-95">
                We offer a Big range of Vehicles for all your Driving needs.We
                have the perfect car to your needs.
              </h1>
            </div>
          </Grid>
        </Grid>
      </div>
    </Styled.Main>
  );
};

export default PlanTrip;
