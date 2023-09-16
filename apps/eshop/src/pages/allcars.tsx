import React from "react";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import Allcars from "@/components/ui/features/OurCollections/AllCars/AllCars";

const AllCars = () => {
  return (
    <>
      <Head>
        <title>Beach Limo::All Cars</title>
        <meta name="description" content="A Travell service Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Allcars/>
      <Footer />
    </>
  );
};

export default AllCars;
