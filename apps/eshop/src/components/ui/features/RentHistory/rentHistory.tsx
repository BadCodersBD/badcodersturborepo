import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";

export type UserData = {
  token: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
};

export type RentalDataType = {
  airportname: string;
  carModel: string;
  childseat: number;
  flightno: number;
  luggage: number;
  mobilenumber: number;
  passenger: number;
  pickuplocation: string;
  pickuptime: string;
  rentalprice: string;
  startDate: Date;
  endDate: Date;
  triptype: string;
};

const RentHistory = () => {
  const cookies = useMemo(() => new Cookies(), []); // Create cookies object
  const [userData, setUserData] = useState<UserData | null>(null);
  const [rentalHistory, setRentalHistory] = useState<RentalDataType[]>([]); // Assuming rental history is an array
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const userDataFromCookie = cookies.get("userData");
    if (userDataFromCookie) {
      setUserData(userDataFromCookie);
    }
  }, [cookies]);

  useEffect(() => {
    const fetchRentalHistory = async () => {
      try {
        setLoading(true);
        const userId = userData?.user._id;
        const token = userData?.token;
        // console.log(token);
        // console.log(userId);

        const response = await fetch(
          `https://carrentalserver.vercel.app/api/carrents/rentalbyuser/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.text(); // Try to get the response as text
        try {
          const data = JSON.parse(responseData); // Try to parse as JSON
          setRentalHistory(data);
          setLoading(false);
        } catch (error) {
          toast.error("Error parsing response as JSON");
        }
      } catch (error) {
        console.error("Error fetching rental history:", error);
        setLoading(false);
      }
    };

    if (userData) {
      fetchRentalHistory();
    }
  }, [userData]);

  console.log(rentalHistory);

  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={100} />
      </div>
    );
  }

  return (
    <div>
      <h1>Rent history</h1>
      <div>
        {rentalHistory.map((rental, index) => (
          <div key={index}>
            <h1>Airport Name: {rental.airportname}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentHistory;
