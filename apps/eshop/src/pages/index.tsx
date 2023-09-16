"use client";
import react from "react";
import Header from "@/components/ui/features/Header/Header";
import Main from "@/components/ui/element/Main/Main";
import GoToTopButton from "../components/ui/element/GoToTopButton/GoToTopButton";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import Footer from "@/components/ui/features/footer/Footer";
import SimpleBottomNavigation from "@/components/ui/features/BottomNavigation/BottomNavigation";
// import TopBanner from "../components/ui/features/TopHeader/TopBanner";
import metaData from "../../public/meta.json";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Beach Limo</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="uF7IpXKCuelQJy81bb-K1zcDj1VXO3l366zJzWjRki8" />
        <link rel="icon" href="/favico.png" />
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
