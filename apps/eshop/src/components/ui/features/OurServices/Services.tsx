import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./Services.styled";
import { fetchservicesgallery } from "../../../../utils/fetchServicesgallery";
import type { servicesProptype } from "../../../../types/type";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import Link from "next/link";

const Services = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayServices, setdisplayservices] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const services = await fetchservicesgallery();
        setServices(services);
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
    <Styled.Main id="services">
      <h1 className="text-2xl flex justify-center items-center font-bold my-5">
        Services We Provide
      </h1>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className="grid  gap-5 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {Services.slice(0, displayServices).map((data, index) => (
          <Styled.Card key={index}>
              <Styled.CardImage
                alt="card Image"
                height={0}
                width={0}
                sizes="100vw"
                src={urlForThumbnail(data.imagegallery)}
              />
            <Styled.Title>{data.title}</Styled.Title>
          </Styled.Card>
        ))}
      </div>
      <Link href="/service">
        <div className="mt-5 flex justify-center">
          <Styled.SeeMore>click here</Styled.SeeMore>
        </div>
      </Link>
    </Styled.Main>
  );
};

export default Services;
