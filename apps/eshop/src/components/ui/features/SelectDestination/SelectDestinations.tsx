import React, { useState, useEffect } from "react";
import { Styled } from "./SelectDestination.styled";
import { DatePicker, DatePickerProps, Select, Space, Button } from "antd";

const Selectdestination = () => {
  const [visitingDate, setVisitingDate] = useState("");
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setVisitingDate(dateString);
  };

  return (
    <Styled.Main>
      <div className="p-10">
        <Styled.Card>
          <h1 className="text-center text-2xl font-bold">Book Your Cars</h1>
          <div className="flex gap-4 p-10">
            <Select
              style={{ width: "100%" }}
              allowClear
              placeholder="Select Car"
            >
              <Select.Option value="CHRYSLER">CHRYSLER 300 WHITE</Select.Option>
              <Select.Option value="FORD">FORD TRANSIT</Select.Option>
              <Select.Option value="Cadillac">Cadillac Escalade</Select.Option>
              <Select.Option value="CHEVROLET">
                CHEVROLET SUBURBAN
              </Select.Option>
            </Select>
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
          </div>
          <div className="flex gap-4 w-full p-10">
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
            <label>Submit Button</label>
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

export default Selectdestination;
