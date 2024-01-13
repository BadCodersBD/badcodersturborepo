"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../variant";
import Image from "next/image";

const testimonialData = [
  {
    message:
      "They truly excedded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "John Sparrow",
    job: "Software Developer",
  },
  {
    message:
      "Surpassing my expectations, they turned my car rental into a delightful experience. Their exceptional service was consciously appreciated",
    avatar: "/images/testimonial/avatar.png",
    name: "Michael",
    job: "Software Developer",
  },
  {
    message:
      "Conscious appreciation for their exceptional service that exceeded expectations, making my car rental an absolute delight.",
    avatar: "/images/testimonial/avatar.png",
    name: "Robert",
    job: "Software Developer",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[450px] xl:h-[400px] "
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center ">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium ">
                  {message}
                </div>
                <Image
                  alt="image"
                  src={avatar}
                  height={64}
                  width={64}
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                {/* <div className="text-secondary">{job}</div> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
