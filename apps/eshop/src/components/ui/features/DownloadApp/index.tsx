"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../variant";

 const DownloadApp = () => {
  return (
    <section className=" pt-5 md:pt-16 pb-4 xl:pt-18 flex items-end overflow-hidden " id="download">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0 ">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className=" text-[2rem] font-bold md:text-[4rem] ">Download our app now and hit the road with ease</motion.h2>
              <motion.p
               variants={fadeIn("right", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.6 }}
               className="mb-10 md:text-lg px-4"
              >{`Join the thousands of satisfied travelers who have embraced the convenience of our rental car service app. Elevate your journey, embrace the freedom of mobility, and let the open road become your canvas. Download our app now and make every trip an unforgettable experience! 🌟🚗`}
              </motion.p>
              <motion.div 
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex gap-x-3 justify-center md:justify-start ">
                <button title="button" type="button" className="btn-cta"><Image alt="img" src={'/icons/buttons/google-play.svg'} width={132 } height={36}/></button>
                <button title="button" type="button" className="btn-cta"><Image alt="img" src={'/icons/buttons/app-store.svg'} width={132 } height={36}/></button>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none "
          >
            <Image alt="phone" src={"/images/cta/phone2.png"} width={320} height={640} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
