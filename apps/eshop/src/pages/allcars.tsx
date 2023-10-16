import React from "react";
import Head from "next/head";
import Header from "@/components/ui/features/Header/Header";
import Footer from "@/components/ui/features/footer/Footer";
import Allcars from "@/components/ui/features/OurCollections/AllCars/AllCars";
import metaData from "../../public/meta.json";


const AllCars = () => {
  return (
    <>
      <Head>
        <title>Beach Limo::All Cars</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8" />   
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Allcars product={[]}/>
      <Footer />
    </>
  );
};

export default AllCars;
