import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./Servicepage.styled";
import { fetchservicesgallery } from "../../../../../utils/fetchServicesgallery";
import type { servicesProptype } from "../../../../../types/type";
import { GenericSpinner } from "../../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../../utils/imageProcess";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ServicePage = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    <Styled.Main>
      <Link href="/">
        <div className=" border border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
          <ArrowBackIcon />
          Back to Home
        </div>
      </Link>
      <h1 className="text-2xl flex justify-center items-center font-bold my-5">
        Services We Provide
      </h1>
      <div className="grid  gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {Services.map((data, index) => (
          <Styled.Card key={index}>
            <div className="my-2">
              <Styled.CardImage
                alt="card Image"
                height={0}
                width={0}
                sizes="100vw"
                src={urlForThumbnail(data.imagegallery)}
              />
            </div>
            <Styled.Title>{data.title}</Styled.Title>
          </Styled.Card>
        ))}
      </div>
    </Styled.Main>
  );
};

export default ServicePage;
