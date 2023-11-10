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
  startDate: string;
  endDate: string;
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
      <h1 className="text-center text-3xl font-semibold underline py-5">Your Rent history</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-5">
        {rentalHistory.map((rental, index) => (
          <div key={index} className="border border-gray-300 p-5 rounded-lg hover:shadow-black hover:shadow-md cursor-pointer">
            <h1 className="border border-gray-400 p-3 text-lg">Airport Name: {rental.airportname}</h1>
            <h1 className="border border-gray-400 p-3">Car Model: {rental.carModel}</h1>
            <h1 className="border border-gray-400 p-3">Child Seat: {rental.childseat}</h1>
            <h1 className="border border-gray-400 p-3">End Date: {rental.endDate}</h1>
            <h1 className="border border-gray-400 p-3">Start Date: {rental.startDate}</h1>
            <h1 className="border border-gray-400 p-3">Flight No: {rental.flightno}</h1>
            <h1 className="border border-gray-400 p-3">Luggage quantity: {rental.luggage}</h1>
            <h1 className="border border-gray-400 p-3">Mobile Number: {rental.mobilenumber}</h1>
            <h1 className="border border-gray-400 p-3">Passeneger: {rental.passenger}</h1>
            <h1 className="border border-gray-400 p-3">Rental Price: {rental.rentalprice}</h1>
            <h1 className="border border-gray-400 p-3">Pickup Place: {rental.pickuplocation}</h1>
            <h1 className="border border-gray-400 p-3">Pick Up time {rental.pickuptime}</h1>
            <h1 className="border border-gray-400 p-3">Trip Type: {rental.triptype}</h1>
            {/* <div className="flex justify-center items-center">
            <button type="button" className="py-2 px-3 border border-green-600 hover:bg-green-500 rounded-lg my-3">View Status</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentHistory;
