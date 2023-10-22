import React, { useState, useEffect } from "react";
import { Styled } from "./BookingReservation.styled";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Select,
  Space,
  Modal,
} from "antd";
import { fetchservice } from "../../../../utils/fetchServices";
import type { servicesProptype } from "../../../../types/type";
import Cookies from "universal-cookie";
import router from "next/router";
import { GenericSpinner } from "../../element/GenericSpinner/GenericSpinner";

const BookingReservation = () => {
  const [Services, setServices] = useState<servicesProptype[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [triptype, setTriptype] = useState("");
  // const [dropofflocation, setDropofflocation] = useState("");
  const [formIncomplete, setFormIncomplete] = useState(false);
  const cookies = new Cookies();
  const userData = cookies.get("userData");
  const token = userData?.token;
  const userId = userData?.user._id;

  const handleairport = (value: any) => {
    setTriptype(value);
  };

  console.log(token);
  // console.log(userId);

  // const handlestartdate: DatePickerProps["onChange"] = (date, dateString) => {
  //   setStartDate(dateString);
  // };

  // const handleEnddate: DatePickerProps["onChange"] = (date, dateString) => {
  //   setEndDate(dateString);
  // };

  const [formData, setFormData] = useState({
    airportname: "",
    flightno: "",
    carModel: "",
    pickuplocation: "",
    dropoffLocation: "",
    pickuptime: "",
    mobilenumber: "",
    startDate: "",
    endDate: "",
    passenger: "",
    luggage: "",
    childseat: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (key: any, value: any) => {
    if (key === "carModel") {
      const selectedService = Services.find(
        (service) => service.title === value
      );
      setFormData({
        ...formData,
        [key]: value,
        rentalprice: selectedService ? selectedService.hourlyprice : null,
      });
    } else {
      setFormData({ ...formData,[key]: value });
    }
    setFormIncomplete(false); // Reset formIncomplete flag on input change
  };

  const handleConfirm = async (e: any) => {
    if (Object.values(formData).some((value) => !value)) {
      setFormIncomplete(true);
      return;
    }

    e.preventDefault();
    // Set a flag in localStorage to indicate the form has been submitted
    localStorage.setItem("formSubmitted", "true");
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://carrentalserver.vercel.app/api/carrents/createCarRental",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId,
            triptype,
            ...formData,
          }),
        }
      );
      if (response.ok) {
        router.push("/success");
      } else {
        console.error("Unexpected response:", response);
      }
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after request is complete
      setModalVisible(false);
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
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

  if (loading) {
    return (
      <div className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <GenericSpinner diameter={100} />
      </div>
    );
  }

  console.log(triptype)
  console.log(formData)


  return (
    <Styled.Main>
      <Link href="/">
        <div className=" border text-black border-green-700 w-40 h-auto mt-5 p-3 hover:bg-lime-600 hover:text-white hover:transition rounded-md">
          <ArrowBackIcon />
          Back to Home
        </div>
      </Link>
      <div className="p-2 lg:p-10">
        <h1 className="text-center text-2xl font-semibold">Book Your Car</h1>
        <Styled.Card>
          <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-10 ">
            <Space className="w-full" direction="vertical">
              <label>Select Your Trip</label>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Select Trip"
                onChange={handleairport}
              >
                <Select.Option value="oneway">One Way</Select.Option>
                <Select.Option value="roundtrip">Round Trip</Select.Option>
                <Select.Option value="fromairport">From Airport</Select.Option>
                <Select.Option value="toairport">To Airport</Select.Option>
              </Select>
              {triptype === "fromairport" && (
                <div className="w-full">
                  <Space className="w-full" direction="vertical">
                    <label>Airport Name</label>
                    <Input
                      name="airportname"
                      onChange={(e) =>
                        handleInputChange("airportname", e.target.value)
                      }
                      placeholder="type Airport Name"
                    />
                  </Space>
                  <Space className="w-full" direction="vertical">
                    <label>Flight No</label>
                    <Input
                      name="flightno"
                      onChange={(e) =>
                        handleInputChange("flightno", e.target.value)
                      }
                      placeholder="type Your Flight No"
                    />
                  </Space>
                </div>
              )}
              {triptype === "toairport" && (
                <Space className="w-full" direction="vertical">
                <label>Airport Name</label>
                <Input
                  name="airportname"
                  onChange={(e) =>
                    handleInputChange("airportname", e.target.value)
                  }
                  placeholder="type Airport Name"
                />
              </Space>
              )}
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Car Model</label>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Select Car"
                onChange={(value) => handleInputChange("carModel", value)}
              >
                {Services.map((data, index) => (
                  <Select.Option key={index} value={data.title}>
                    {data.title}
                  </Select.Option>
                ))}
              </Select>
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Rental Price</label>
              <div className=" border border-gray-600 text-black rounded-lg py-1 px-3 w-full">
                {formData.rentalprice
                  ? `$${formData.rentalprice} per hour`
                  : "Select a car model"}
              </div>
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Give Pick Up Location</label>
              <Input
                name="pickuplocation"
                onChange={(e) =>
                  handleInputChange("pickuplocation", e.target.value)
                }
                placeholder="type your location"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Give Drop Off Location</label>
              <Input
                name="dropoff"
                onChange={(e) =>
                  handleInputChange("dropoffLocation", e.target.value)
                }
                placeholder="type your location"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Pickup Time</label>
              <TimePicker
                name="pickuptime"
                onChange={(time, timeString) =>
                  handleInputChange("pickuptime", timeString)
                }
                className="w-full"
                placeholder="Select your Time"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Your Mobile Number</label>
              <InputNumber
                type="number"
                onChange={(value) => handleInputChange("mobilenumber", value)}
                name="mobilenumber"
                className="w-full"
                placeholder="Mobile Number"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Start Date</label>
              <DatePicker
                className="w-full"
                name="startdate"
                onChange={(date, dateString) =>
                  handleInputChange("startDate", dateString)
                }
                picker="date"
              />
            </Space>

            <Space className="w-full" direction="vertical">
              <label>End Date</label>
              <DatePicker
                className="w-full"
                name="enddate"
                onChange={(date, dateString) =>
                  handleInputChange("endDate", dateString)
                }
                picker="date"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Passenger Quantity</label>
              <InputNumber
                type="number"
                onChange={(value) => handleInputChange("passenger", value)}
                name="passenger"
                className="w-full"
                placeholder="Passenger Quantity"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Luggage Quantity</label>
              <InputNumber
                type="number"
                onChange={(value) => handleInputChange("luggage", value)}
                name="luggage"
                className="w-full"
                placeholder="luggage Quantity"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>{`Child Seat (If Any)`}</label>
              <InputNumber
                type="number"
                onChange={(value) => handleInputChange("childseat", value)}
                name="childseat"
                className="w-full"
                placeholder="Child Seat Quantity"
              />
            </Space>
          </div>
          <button
            disabled={formIncomplete} // Disable button if form is incomplete
            onClick={showModal}
            className="w-1/2 flex justify-center items-center mx-auto py-2 px-3 bg-sky-700 hover:bg-sky-900 rounded-lg text-white"
            type="button"
          >
            Book Now
          </button>
        </Styled.Card>
      </div>
      <Modal open={modalVisible} footer={null} onCancel={handleCancel}>
        <div>
          <h1 className="text-center text-2xl font-semibold">
            Confirm Booking
          </h1>
          <div>
          <p className="border border-gray-600 p-2 rounded-lg">
            <span className="text-lg font-semibold"> Airport Name: </span>
            {formData.airportname}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Flight No: </span>
            {formData.flightno}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Car Model: </span>
            {formData.carModel}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Rental Price: </span>
            {formData.rentalprice} $/ Per Trip
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Pick Up Location: </span>
            {formData.pickuplocation}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Drop Off Location: </span>
            {formData.dropoffLocation}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Pick Up Time: </span>
            {formData.pickuptime}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Mobile Number: </span>
            {formData.mobilenumber}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Start Date: </span>
            {formData.startDate}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> End Date: </span>
            {formData.endDate}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Passanger Quantity: </span>
            {formData.passenger}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Luggage Quantity: </span>
            {formData.luggage}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Childseat: </span>
            {formData.childseat}
          </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <button
            disabled={isLoading}
            onClick={handleConfirm}
            type="submit"
            className=" text-white w-[40%] py-3 px-5 rounded-full bg-[#7EC242] hover:bg-green-500 mt-5"
          >
            {isLoading ? "Submiting..." : "Submit"}
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="text-[#7EC242] w-[40%] px-5 py-3 rounded-full bg-white border border-[#7EC242] hover:bg-[#7EC242] hover:text-white mt-5"
          >
            Go Back
          </button>
        </div>
      </Modal>
    </Styled.Main>
  );
};

export default BookingReservation;
