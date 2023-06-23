"use client";
import react from 'react';
import Header from '@/components/ui/features/Header/Header';
import Footer from '@/components/ui/features/footer/Footer';
import Main from '@/components/ui/element/Main/Main';
import GoToTopButton from "../components/ui/element/GoToTopButton/GoToTopButton"

export default function Home() {
  return (
    <>
      <Header/>
      <Main/>
      <GoToTopButton/>
      <Footer/>
    </>
  )
}
