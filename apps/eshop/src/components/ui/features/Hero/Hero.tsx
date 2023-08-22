import React, { useState, useEffect } from "react";
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

const Hero = () => {
  const [Hero, setHero] = useState<HeroType[]>([]);
  const [socialicon, setSocialicon] = useState<SocialIconType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const hero = await fetchhero();
        const socialicon = await fetchSocialIcon();
        setHero(hero);
        setSocialicon(socialicon);
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
      {Hero.map((data, index) => (
        <Grid
          key={index}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <GridColumn xs={12} lg={6}>
            <Styled.Content>
              <motion.section
                style={{ opacity: 8 }}
                animate={{ x: 0, y: 0 }}
                initial={false}
              >
                <Styled.Greetting>{data.name}</Styled.Greetting>
              </motion.section>
              <Styled.Heading>{data.name}</Styled.Heading>
              <Styled.designation>
                <LaptopIcon fontSize="large" />
                {data.designation}
              </Styled.designation>
            </Styled.Content>
            <div className="flex justify-start pt-2 ml-20 gap-2">
              {socialicon.map((data, index) => (
                <div key={index}>
                  <Link href={data.url}>
                    <Image
                      className=" hover:bg-lime-500 "
                      src={urlForThumbnail(data.image)}
                      alt={data.title}
                      height={0}
                      width={0}
                      sizes="100vw"
                      priority={true}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                        border: "2px solid green",
                        padding: "0.5rem",
                        borderRadius: "20px",
                        transition: "0.2s",
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </GridColumn>
          <GridColumn xs={12} lg={6}>
            <Image
              src={urlForThumbnail(data.image)}
              alt={data.name}
              width={0}
              height={0}
              priority={true}
              sizes="100vw"
              style={{ height: "80vh", width: "100%", objectFit: "contain" }}
            />
          </GridColumn>
        </Grid>
      ))}
    </Styled.Main>
  );
};

export default Hero;
