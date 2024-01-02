import React from "react";
import { data } from "./data";
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

const CarDetailsCarousel = () => {
	return (
		<div>
			{/* <Image
        src={}
         /> */}
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
				{data.map((data, index) => (
					<SwiperSlide key={index}>
						<Image
							src={data.src}
							alt="cardetail"
							width={0}
							height={0}
							sizes="100vw"
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CarDetailsCarousel;
