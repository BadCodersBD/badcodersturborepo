import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./hero.styled";
import type { HeroType, SocialIconType } from "../../../../types/type";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { fetchhero } from "../../../../utils/fetchHero";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="flex w-full h-full justify-center"
        navigation={true}
        pagination={true}
        keyboard={true}
        cssMode={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {Hero.map((data, index) => (
          <SwiperSlide key={index}>
            <Styled.CarouselImage
              src={urlForThumbnail(data.image)}
              alt="Hero"
              width={0}
              height={0}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Main>
  );
};

export default Hero;
