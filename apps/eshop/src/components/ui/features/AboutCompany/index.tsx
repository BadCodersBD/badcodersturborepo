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
    <section className="section flex items-center" id="services" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:justify-around">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              className="rounded-[20px] "
              src={"/images/limocars/side.png"}
              width={600}
              height={448}
              alt="cars"
            />
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center ">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Cars services simplified.
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
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
                className="flex items-center gap-x-8 mb-12"
              >
                <div className="flex flex-col w-[100px]">
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

                <div className="flex flex-col w-[100px]">
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

                <div className="flex flex-col w-[100px]">
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
