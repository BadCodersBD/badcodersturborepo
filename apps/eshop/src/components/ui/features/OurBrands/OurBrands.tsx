import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./OurBrands.styled";
import { fetchBrands } from "../../../../utils/fetchBrands";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import type { BrandsProptype } from "../../../../types/type";
import {motion} from 'framer-motion';
import { fadeIn } from '../../../../../variant';


const OurBrands = () => {
  const [Brands, setBrands] = useState<BrandsProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const brands = await fetchBrands();
        setBrands(brands);
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
        <GenericSpinner diameter={100} />
      </div>
    );
  }

  return (
    <Styled.Main>
      <motion.div 
        variants={fadeIn("up", 0.4)}
        // initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      className='container mx-auto'>
        <h1 data-aos="fade-left" className=" text-center text-2xl font-semibold mb-4">Our Luxury Brands</h1>
      <div className="grid  gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        {Brands.map((data, index) => (
          <Styled.Card key={index} data-aos="fade-right">
            <Styled.CardImage
              src={urlForThumbnail(data.logo)}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Styled.Title>{data.title}</Styled.Title>
          </Styled.Card>
        ))}
      </div>
      </motion.div>
    </Styled.Main>
  );
};

export default OurBrands;
