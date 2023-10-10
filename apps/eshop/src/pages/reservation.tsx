import ReservationLayout from "@/components/layouts/ReservationLayout";
import React from "react";
import Head from "next/head";
import metaData from "../../public/meta.json";


const Reservation = () => {
  return (
    <>
         <Head>
        <title>Beach Limo: Car Rental Services</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8" />        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <ReservationLayout />
    </>
  );
};

export default Reservation;
