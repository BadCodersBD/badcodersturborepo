"use client";
import react from "react";
import Header from "@/components/ui/features/Header/Header";
import Main from "@/components/ui/element/Main/Main";
import GoToTopButton from "../components/ui/element/GoToTopButton/GoToTopButton";
import Head from "next/head";
import ChatBot from "@/components/ui/features/MessengerChatbot/MessengerChatbot";
import Footer from "@/components/ui/features/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Trip</title>
        <meta name="description" content="A Travell service Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <GoToTopButton />
      <ChatBot />
      <Footer />
    </>
  );
}
