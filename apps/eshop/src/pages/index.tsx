"use client";
import react from "react";
import Header from "@/components/ui/features/Header/Header";
import Main from "@/components/ui/element/Main/Main";
import GoToTopButton from "../components/ui/element/GoToTopButton/GoToTopButton";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import Footer from "@/components/ui/features/footer/Footer";
import SimpleBottomNavigation from "@/components/ui/features/BottomNavigation/BottomNavigation";
import metaData from "../../public/meta.json";

export default function Home() {
  
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
      <Header />
      <Main />
      <GoToTopButton />
      <ChatBot />
      <Footer />
      <div className="inline md:hidden">
        <SimpleBottomNavigation />
      </div>
    </>
  );
}
