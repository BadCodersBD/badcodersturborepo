import React, { useState, useEffect, useRef } from "react";
import { Styled } from "./Collection.styled";
import { fetchservice } from "../../../../utils/fetchServices";
import type { servicesProptype } from "../../../../types/type";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import WifiIcon from "@mui/icons-material/Wifi";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessibleIcon from "@mui/icons-material/Accessible";
import Link from "next/link";
import WcIcon from '@mui/icons-material/Wc';

const Collections = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayServices, setdisplayservices] = useState(4);

  // const showMoreProducts = () => {
  //   setdisplayservices(displayServices + 4);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const services = await fetchservice();
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

  const totalSerives = Services.length;
  const showLoadMoreButton = displayServices < totalSerives;

  return (
    <Styled.Main id="gallery">
      <h1 className="text-2xl flex justify-center items-center font-bold my-5">
        We Have Everything You Need
      </h1>
      <div className="grid  gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        {Services.slice(0, displayServices).map((data, index) => (
          <Styled.Card key={index}>
            <Styled.Title>{data.title}</Styled.Title>
            <div className="my-2">
              <Styled.CardImage
                alt="card Image"
                height={0}
                width={0}
                sizes="100vw"
                src={urlForThumbnail(data.companyImage)}
              />
            </div>
            <div className="flex justify-center items-center">
              <Styled.Subspan>
                <WcIcon color="success" fontSize="medium" />
                Passenger: {data.passenger}
              </Styled.Subspan>
              <Styled.Subspan>
                <BusinessCenterIcon color="primary" fontSize="medium" />
                Luggages: {data.luggage}
              </Styled.Subspan>
              <Styled.Subspan>
                <WifiIcon color="error" fontSize="medium" />
                Wifi: {data.wifi}
              </Styled.Subspan>
            </div>
            <div className="flex justify-around my-2">
              <Link href={`/${data ? data.slug.current : null}`}>
                <Styled.Viewdetails>View Details</Styled.Viewdetails>
              </Link>{" "}
              <Styled.BookNow>Book Now</Styled.BookNow>
            </div>
          </Styled.Card>
        ))}
      </div>
      {/* {showLoadMoreButton && (
        <div className="mt-5 flex justify-center">
          <Styled.SeeMore onClick={showMoreProducts}>See More</Styled.SeeMore>
        </div>
      )} */}
      <Link href="/allcars">
        <div className="mt-5 flex justify-center">
          <Styled.SeeMore>See More</Styled.SeeMore>
        </div>
      </Link>
    </Styled.Main>
  );
};

export default Collections;
