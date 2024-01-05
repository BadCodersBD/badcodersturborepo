import React, { useState, useEffect, useRef } from "react";
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
import Image from "next/image";
import { Styled } from "./CarDetailsCarousel.styled";
import { fetchCargallery } from "../../../../../utils/fetchCar";
import { GenericSpinner } from "@/components/ui/element/GenericSpinner/GenericSpinner";
import type { cargallerytype } from "@/types/type";
import { urlForThumbnail } from "../../../../../utils/imageProcess";

const CarDetailsCarousel = () => {
	const [Cargallery, setCargallery] = useState<cargallerytype[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	console.log()

	useEffect(() => {
		const fetchData = async () => {
		  try {
			setLoading(true);
			const cargallery = await fetchCargallery();
			setCargallery(cargallery);
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
    <Styled.Main>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="flex w-full h-full justify-center"
        // navigation={true}
        pagination={false}
        keyboard={true}
        cssMode={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      >
	  {Cargallery.map((data, index) => (
          <SwiperSlide key={index}>
            <div className=" flex justify-center items-center ">
              <Image
                src={urlForThumbnail(data.imagegallery)}
                alt="cardetail"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <Styled.Title>{data.title}</Styled.Title>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Main>
  );
};

export default CarDetailsCarousel;
