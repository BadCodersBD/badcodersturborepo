import { Styled } from "./WhyChooseUs.Styled";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";

const ChooseUs = () => {
    
  return (
    <>
      <div className="flex justify-center w-full bg-gray-700">
        <div className="py-10">
          <h1 className="text-5xl text-center font-bold py-5">
            Save Big With Our Cheap Car Rental!
          </h1>
          <h1 className="text-3xl text-center">
            Top Airports. Local Suppliers.{" "}
            <span className="text-3xl text-orange-600">24/7</span>Support
          </h1>
        </div>
      </div>
      <Styled.Main>
        <Image
          className="choose-container__img"
          src="/chooseUs/main.png"
          alt="car_img"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className="flex justify-center items-center- pl-10">
            <div className="w-full ">
              <h4 className="text-3xl font-bold ">Why Choose Us</h4>
              <h2 className="text-4xl font-extrabold my-5">
                Best valued deals <br></br> you will ever find
              </h2>
              <p className="text-xl my-5 w-[80%]">
                Discover the best deals you ll ever find with our unbeatable
                offers. We re dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don t miss out on your
                chance to save big.
              </p>
              <div className="bg-orange-600 w-40 hover:bg-orange-400 cursor-pointer my-5 h-auto py-5 px-8 text-white">
                Find Details
              </div>
            </div>
            </div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <div className="pl-10">
              <div className="flex justify-center items-center gap-6">
                <Image
                  src={`/chooseUs/icon1.png`}
                  alt="car-img"
                  width={200}
                  height={200}
                  sizes="100vw"
                  className=" object-contain"
                />
                <div>
                  <h4 className="text-2xl font-bold">Cross Country Drive</h4>
                  <p className="text-lg my-3">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                  src={`/chooseUs/icon2.png`}
                  alt="coin-img"
                  width={200}
                  height={200}
                  sizes="100vw"
                  className=" object-contain"
                />
                <div>
                  <h4 className="text-2xl font-bold">All Inclusive Pricing</h4>
                  <p className="text-lg my-3">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                  src={`/chooseUs/icon3.png`}
                  alt="coin-img"
                  width={200}
                  height={200}
                  sizes="100vw"
                  className=" object-contain"
                />
                <div>
                  <h4 className="text-2xl font-bold">No Hidden Charges</h4>
                  <p className="text-lg my-3">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Styled.Main>
    </>
  );
};

export default ChooseUs;
