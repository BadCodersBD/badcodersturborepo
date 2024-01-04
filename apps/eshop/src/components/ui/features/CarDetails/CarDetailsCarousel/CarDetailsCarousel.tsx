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
import { Styled } from "./CarDetailsCarousel.styled";

const CarDetailsCarousel = () => {
	return (
		<Styled.Main>
			<Swiper
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				loop={true}
				className="flex w-full h-full justify-center"
				navigation={true}
				pagination={false}
				keyboard={true}
				cssMode={true}
				modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
			>
				{data.map((data, index) => (
					<SwiperSlide key={index}>
						<div className=" flex justify-center items-center ">
							<Image
								src={data.src}
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
