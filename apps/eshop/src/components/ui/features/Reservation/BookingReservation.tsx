import React, { useState, useEffect } from "react";
import { Styled } from "./BookingReservation.styled";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DatePicker, DatePickerProps, Select, Space, Button } from "antd";

const BookingReservation = () => {
  const [visitingDate, setVisitingDate] = useState("");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setVisitingDate(dateString);
  };

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
                <Select.Option value="CHRYSLER">
                  CHRYSLER 300 WHITE
                </Select.Option>
                <Select.Option value="FORD">FORD TRANSIT</Select.Option>
                <Select.Option value="Cadillac">
                  Cadillac Escalade
                </Select.Option>
                <Select.Option value="CHEVROLET">
                  CHEVROLET SUBURBAN
                </Select.Option>
              </Select>
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Pick Up Location</label>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Select Pick Up Location"
              >
                <Select.Option value="Miami">Miami</Select.Option>
                <Select.Option value="FortLauderdale">
                  Fort Lauderdale
                </Select.Option>
                <Select.Option value="PalmBeach">Palm Beach</Select.Option>
                <Select.Option value="Tampa">Tampa</Select.Option>
                <Select.Option value="FortMyers">Fort Myers</Select.Option>
                <Select.Option value="Naples">Naples</Select.Option>
                <Select.Option value="KeyWest">Key West</Select.Option>
                <Select.Option value="Orlando">Orlando</Select.Option>
              </Select>
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Drop Off Location</label>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Select Drop Off Location"
              >
                <Select.Option value="Miami">Miami</Select.Option>
                <Select.Option value="FortLauderdale">
                  Fort Lauderdale
                </Select.Option>
                <Select.Option value="PalmBeach">Palm Beach</Select.Option>
                <Select.Option value="Tampa">Tampa</Select.Option>
                <Select.Option value="FortMyers">Fort Myers</Select.Option>
                <Select.Option value="Naples">Naples</Select.Option>
                <Select.Option value="KeyWest">Key West</Select.Option>
                <Select.Option value="Orlando">Orlando</Select.Option>
              </Select>
            </Space>
          </div>
          <div className="grid p-5  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-10 ">
            <Space className="w-full" direction="vertical">
              <label>Pick Up Date</label>
              <DatePicker
                className="w-full"
                name="Pickupdate"
                onChange={onChange}
                picker="date"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Drop Off Date</label>
              <DatePicker
                className="w-full"
                name="dropoffdate"
                onChange={onChange}
                picker="date"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Book Your Car</label>
              <Button className="w-full bg-sky-700" type="primary">
                Book Now
              </Button>
            </Space>
          </div>
        </Styled.Card>
      </div>
    </Styled.Main>
  );
};

export default BookingReservation;
