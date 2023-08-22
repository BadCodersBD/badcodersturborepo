import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./hero.styled";
import Grid from "@mui/material/Grid";
import { GridColumn } from "../../element/GridColumn/GridColumn";
import type { HeroType, SocialIconType } from "../../../../types/type";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { fetchhero } from "../../../../utils/fetchHero";
import { fetchSocialIcon } from "../../../../utils/fetchSocialIcon";
import Image from "next/image";
import LaptopIcon from "@mui/icons-material/Laptop";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
  const [Hero, setHero] = useState<HeroType[]>([]);
  // const [socialicon, setSocialicon] = useState<SocialIconType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const hero = await fetchhero();
        // const socialicon = await fetchSocialIcon();
        setHero(hero);
        // setSocialicon(socialicon);
        setLoading(false);
      } catch (e) {
        console.log("Error", e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={50} />
      </div>
    );
  }

  return (
    <Styled.Main id="home">
      <Swiper
        className="flex w-full h-full justify-center"
        navigation={true}
        pagination={true}
        keyboard={true}
        cssMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {Hero.map((data, index) => (
          <SwiperSlide key={index}>
            <Image
              src={urlForThumbnail(data.image)}
              alt="Hero"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Main>
  );
};

export default Hero;
