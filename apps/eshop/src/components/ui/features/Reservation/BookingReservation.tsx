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
  // const [pickuplocation, setPickuplocation] = useState("");
  // const [dropofflocation, setDropofflocation] = useState("");
  const [formIncomplete, setFormIncomplete] = useState(false);
  const cookies = new Cookies();
  const userData = cookies.get("userData");
  const token = userData?.token;
  const userId = userData?.user._id;

  // console.log(token);
  // console.log(userId);

  // const handlestartdate: DatePickerProps["onChange"] = (date, dateString) => {
  //   setStartDate(dateString);
  // };

  // const handleEnddate: DatePickerProps["onChange"] = (date, dateString) => {
  //   setEndDate(dateString);
  // };

  const [formData, setFormData] = useState({
    carModel: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpTime: "",
    mobileNumber: "",
    startDate: "",
    endDate: "",
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
      setFormData({ ...formData, [key]: value });
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
              <label>Select Pick Up Location</label>
              <Input
                name="pickup"
                onChange={(e) =>
                  handleInputChange("pickUpLocation", e.target.value)
                }
                placeholder="type your location"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Drop Off Location</label>
              <Input
                name="dropoff"
                onChange={(e) =>
                  handleInputChange("dropOffLocation", e.target.value)
                }
                placeholder="type your location"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Select Pickup Time</label>
              <TimePicker
                name="pickuptime"
                onChange={(time, timeString) =>
                  handleInputChange("pickUpTime", timeString)
                }
                className="w-full"
                placeholder="Select your Time"
              />
            </Space>
            <Space className="w-full" direction="vertical">
              <label>Your Mobile Number</label>
              <InputNumber
                type="number"
                onChange={(value) => handleInputChange("mobileNumber", value)}
                name="mobileNumber"
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
          <p className="border border-gray-600 p-2 rounded-lg">
            <span className="text-lg font-semibold"> Car Model: </span>
            {formData.carModel}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Rental Price: </span>
            {formData.rentalprice} $/ Per Trip
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Pick Up Location: </span>
            {formData.pickUpLocation}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Drop Off Location: </span>
            {formData.dropOffLocation}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Pick Up Time: </span>
            {formData.pickUpTime}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> Mobile Number: </span>
            {formData.mobileNumber}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold">Start Date: </span>
            {formData.startDate}
          </p>
          <p className="border border-gray-600 p-2 mt-2 rounded-lg">
            <span className="text-lg font-semibold"> End Date: </span>
            {formData.endDate}
          </p>
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
