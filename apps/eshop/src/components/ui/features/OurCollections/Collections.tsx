import type { servicesProptype } from "../../../../types/type";
import { fetchservice } from "../../../../utils/fetchServices";
import { urlForThumbnail } from "../../../../utils/imageProcess";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";
import { Styled } from "./Collection.styled";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WcIcon from "@mui/icons-material/Wc";
import WifiIcon from "@mui/icons-material/Wifi";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const Collections = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayServices, setDisplayServices] = useState(getInitialDisplay());
  const cookies = new Cookies();
  const router = useRouter();

  const isLoggedIn = cookies.get("userData");

  const handleBookNowClick = () => {
    if (isLoggedIn) {
      router.push("/reservation");
    } else {
      // toast.error("Please log in to book.");
      router.push("/login");
    }
  };

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

  useEffect(() => {
    function handleResize() {
      setDisplayServices(getInitialDisplay());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  function getInitialDisplay() {
    return typeof window !== "undefined" && window.innerWidth < 990 ? 4 : 3; // Adjust the breakpoint if needed
  }

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
    <Styled.Main id="brand">
      <h1 data-aos="fade-left" className="text-xl lg:text-2xl flex justify-center items-center font-bold my-5">
        We Have Everything You Need
      </h1>
      <div
        className={`grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-${displayServices} xl:grid-cols-${displayServices} 2xl:grid-cols-${displayServices}`}
      >
        {Services.slice(0, displayServices).map((data, index) => (
          <Styled.Card data-aos="fade-right" key={index}>
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
            <div className="flex justify-around">
              {/* <h1 className="text-xl font-semibold">
                ${data.hourlyprice}/ Trip
              </h1> */}
              <h1 className="text-xl font-semibold">Speed: {data.speed}/Kmh</h1>
              {/* <h1 className="text-xl font-semibold">
                ${data.dailyprice}/Daily
              </h1> */}
            </div>
            <div className="flex justify-center items-center">
              <Styled.Subspan>
                <WcIcon color="success" fontSize="medium" />
                <span className="hidden md:inline">Passenger:</span>
                {data.passenger}
              </Styled.Subspan>
              <Styled.Subspan>
                <BusinessCenterIcon color="primary" fontSize="medium" />
                <span className="hidden md:inline">Luggages:</span>{" "}
                {data.luggage}
              </Styled.Subspan>
              <Styled.Subspan>
                <WifiIcon color="error" fontSize="medium" />
                <span className="hidden md:inline">Wifi:</span> {data.wifi}
              </Styled.Subspan>
            </div>
            <div className="flex justify-around my-2">
              <Styled.Viewdetails href={`/${data ? data.slug.current : null}`}>
                View Details
              </Styled.Viewdetails>
              <Styled.BookNow onClick={handleBookNowClick}>
                Book Now
              </Styled.BookNow>
            </div>
          </Styled.Card>
        ))}
      </div>
      {/* {showLoadMoreButton && (
        <div className="mt-5 flex justify-center">
          <Styled.SeeMore onClick={showMoreProducts}>See More</Styled.SeeMore>
        </div>
      )} */}
      <div className="mt-5 flex justify-center">
        <Styled.SeeMore href="/allcars">click here</Styled.SeeMore>
      </div>
    </Styled.Main>
  );
};

export default Collections;
