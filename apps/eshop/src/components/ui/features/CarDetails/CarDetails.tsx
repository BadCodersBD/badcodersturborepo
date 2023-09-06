import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./CarDetails.styled";
import { fetchservice } from "../../../../utils/fetchServices";
import type { servicesProptype } from "../../../../types/type";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import WifiIcon from '@mui/icons-material/Wifi';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessibleIcon from '@mui/icons-material/Accessible';
import Link from "next/link";
import type { ProductDetailsType } from "@/types/type";

const Cardetails = ({ product }: ProductDetailsType) => {
  const [loading, setLoading] = useState<boolean>(false);



  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={100} />
      </div>
    );
  }

  console.log(product)

  return (
    <Styled.Main id="gallery">
        <h1 className="text-2xl flex justify-center items-center font-bold my-5">We Have Everything You Need</h1>
      <div className="grid  gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Styled.Card>
            <Styled.Title>{product.title}</Styled.Title>
            <div className="my-2">
            <Styled.CardImage
              alt="card Image"
              height={0}
              width={0}
              sizes="100vw"
              src={urlForThumbnail(product.companyImage)}
            />
            </div>
            <div className="flex justify-center items-center">
            <Styled.Subspan><AccessibleIcon color="success" fontSize="medium"/>Passenger: {product.passenger}</Styled.Subspan>
            <Styled.Subspan><BusinessCenterIcon color="primary" fontSize="medium"/>Luggages: {product.luggage}</Styled.Subspan>
            <Styled.Subspan><WifiIcon color="error" fontSize="medium"/>Wifi: {product.wifi}</Styled.Subspan>
            </div>
            <div className="flex justify-around my-2">
            <Styled.BookNow>Book Now</Styled.BookNow>
            </div>
          </Styled.Card>
      </div>
    </Styled.Main>
  );
};

export default Cardetails;
