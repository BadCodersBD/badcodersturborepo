import React, { useState, useEffect } from "react";
import { Styled } from "./BookingReservation.styled";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Input,
  InputNumber,
  DatePicker,
  DatePickerProps,
  Select,
  Space,
  Button,
} from "antd";
import { fetchservice } from "../../../../utils/fetchServices";
import type { servicesProptype } from "../../../../types/type";

const BookingReservation = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [visitingDate, setVisitingDate] = useState("");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setVisitingDate(dateString);
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

  return (
    <Styled.Main>
      <Link href="/">
        <div className=" border text-black border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
          <ArrowBackIcon />
          Back to Home
        </div>
      </Link>
      <div className="p-10">
        <h1 className="text-center text-2xl font-semibold">Book Your Car</h1>
        <Styled.Card>
          <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 ">
            <Space className="w-full" direction="vertical">
              <label>Select Car</label>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Select Car"
              >
                {Services.map((data, index) => (
                  <Select.Option key={index} value={data.title}>
                    {data.title}
                  </Select.Option>
                ))}
              </Select>
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Pick Up Location</label>
              <Input placeholder="type your location" />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Drop Off Location</label>
              <Input placeholder="type your location" />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Your Mobile Number</label>
              <InputNumber className="w-full" placeholder="Mobile Number" />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Start Date</label>
              <DatePicker
                className="w-full"
                name="Pickupdate"
                onChange={onChange}
                picker="date"
              />
            </Space>

            <Space className="w-full" direction="vertical">
              <label>End Date</label>
              <DatePicker
                className="w-full"
                name="dropoffdate"
                onChange={onChange}
                picker="date"
              />
            </Space>
          </div>
          <button
            className="w-1/2 flex justify-center items-center mx-auto py-2 px-3 bg-sky-700 hover:bg-sky-900 rounded-lg text-white"
            type="button"
          >
            Book Now
          </button>
        </Styled.Card>
      </div>
    </Styled.Main>
  );
};

export default BookingReservation;
