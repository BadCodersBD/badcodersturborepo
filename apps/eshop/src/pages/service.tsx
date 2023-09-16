import React from "react";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import ServicePage from "@/components/ui/features/OurServices/Servicepage/ServicesPage";

const service = () => {
  return (
    <>
      <Head>
        <title>Beach Limo::Service</title>
        <meta name="description" content="A Travell service Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ServicePage />
      <Footer />
    </>
  );
};

export default service;
