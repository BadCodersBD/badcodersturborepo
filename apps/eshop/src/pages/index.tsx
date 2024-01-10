"use client";
import react from "react";
import Header from "@/components/ui/features/Header/Header";
import Main from "@/components/layouts/Main";
import GoToTopButton from "../components/ui/element/GoToTopButton/GoToTopButton";
import Head from "next/head";
import Footer from "@/components/ui/features/footer/Footer";
import SimpleBottomNavigation from "@/components/ui/features/BottomNavigation/BottomNavigation";
import metaData from "../../public/meta.json";
import WhatsAppChatbot from "@/components/ui/features/WhatsAppChatbot/WhatsAppChatbot";
// import FacebookChatPlugin from "@/components/ui/features/FacebookChatPlugin";

 const Home = () => {

  return (
    <>
      <Head>
        <title>Beach Limo : Car Rental Services</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />
        <meta name="google-site-verification" content="K81iN0RCpi5NOoiQmvPbDGfFInM19PeDj0yrYEM3P-8" />        
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WL5ZCCVS');
        `,
      }} />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header />
      <Main />
      <GoToTopButton />
      <WhatsAppChatbot/>
      <Footer />
      <div className="inline md:hidden">
        <SimpleBottomNavigation />
      </div>
    </>
  );
}

export default Home