"use client";
import Image from "next/image";
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../variant";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className=" h-[90vh] flex justify-center items-center my-20 md:my-2" id="services" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:justify-around">
          <div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="md:rounded-[20px] "
              src={"/images/limocars/side.png"}
              width={800}
              height={448}
              // fill
              priority={true}
              alt="cars"
            />
          </motion.div>
          </div>
          <div className="flex-1 flex items-center xl:justify-center ">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=" text-[2.5rem] md:text-[4rem] font-bold text-center md:text-start"
              >
                Cars Services Simplified
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] text-lg text-opacity-25 max-w-md text-center md:text-start"
              >
                Rent, choose, and repair with ease. Our convinent locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex justify-center lg:justify-start items-center gap-8 mb-12"
              >
                <div className="flex justify-center items-center md:justify-start md:items-start flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-[#f13024] mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary ">
                    car <br />
                    types
                  </div>
                </div>

                <div className="flex  justify-center items-center md:justify-start md:items-start flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-[#f13024] mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary ">
                    rental
                    <br />
                    outlets
                  </div>
                </div>

                <div className="flex justify-center items-center md:justify-start md:items-start flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-[#f13024] mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary ">
                    repair <br />
                    points
                  </div>
                </div>
              </motion.div>
              <motion.button
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 
                uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
