import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./CarDetails.styled";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import WifiIcon from "@mui/icons-material/Wifi";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";
import type { ProductDetailsType } from "@/types/type";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WcIcon from '@mui/icons-material/Wc';
import { useRouter } from 'next/router';
import Cookies from "universal-cookie";

const Cardetails = ({ product }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const cookies = new Cookies();
  const router = useRouter();

  const isLoggedIn = cookies.get('userData'); 

  const handleBookNowClick = () => {
    if (isLoggedIn) {
      router.push("/reservation");
    } else {
      // toast.error("Please log in to book.");
      router.push("/login");

    }
  };

  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={100} />
      </div>
    );
  }


  return (
    <Styled.Main id="gallery">
      <Link href="/">
        <div className=" border border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
          <ArrowBackIcon />
          Back to Home
        </div>
      </Link>
      <h1 className="text-2xl flex justify-center items-center font-bold my-5">
        We Have Everything You Need
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="my-2">
            <Styled.CardImage
              alt="card Image"
              height={0}
              width={0}
              sizes="100vw"
              src={urlForThumbnail(product?.companyImage)}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <Styled.Title>{product.title}</Styled.Title>
          <div className="flex justify-start items-center">
            <Styled.Subspan>
              <WcIcon color="success" fontSize="medium" />
              Passenger: {product.passenger}
            </Styled.Subspan>
            <Styled.Subspan>
              <BusinessCenterIcon color="primary" fontSize="medium" />
              Luggages: {product.luggage}
            </Styled.Subspan>
            <Styled.Subspan>
              <WifiIcon color="error" fontSize="medium" />
              Wifi: {product.wifi}
            </Styled.Subspan>
          </div>
          <div className="flex justify-start mt-5">
          <Styled.BookNow onClick={handleBookNowClick}>Book Now</Styled.BookNow>
          </div>
        </Grid>
      </Grid>
    </Styled.Main>
  );
};

export default Cardetails;
