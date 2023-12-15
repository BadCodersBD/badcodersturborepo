import React from "react";
import RippleAnimation, { Styled } from "./AboutUs.styled";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Image from "next/image";
import { GridRow } from "ui/components/elements/GridRow/GridRow";
import { GridColumn } from "ui/components/elements/GridColumn/GridColumn";
import RadarIcon from "@mui/icons-material/Radar";
import { urlForThumbnail } from "../../utils/cms/imageProcess";

type HistorydataType = {
  logoImage: { asset: { _ref: string } };
  companyname: string;
  content: string;
  cardonedata: string;
  cardtwodata: string;
};
export type HistoryColorType = {
  backgroundColorCardone: string;
  backgroundColorCardtwo: string;
  textColor: string;
  riplecolorone: string;
  riplecolortwo: string;
  riplecolorthree: string;
  riplecolorfour: string;
};

type Props = {
  historyColor: HistoryColorType;
  historyData: HistorydataType[];
  headingColor: { headingColor: string };
};

const AboutUsSection = ({ historyColor, historyData, headingColor }: Props) => {
  return (
    <Styled.Main id="about-us">
      <h1
        className="mb-2 text-center text-xl font-semibold"
        style={{ color: headingColor?.headingColor }}
      >
        Our Glorious
      </h1>
      <h1 className="mb-2 text-center text-3xl font-bold">
        History & Achievement
      </h1>
      {historyData.map((data: any, index: any) => (
        <GridRow tag="div" key={index}>
          <GridColumn xs={12} lg={4}>
            <div className="h-full w-full flex flex-col items-start justify-center">
              <h1 className="text-2xl font-medium mb-2">{data.companyname}</h1>
              <Styled.content>{data.content}</Styled.content>
            </div>
          </GridColumn>
          <GridColumn xs={12} lg={4}>
            <Styled.Rippleposition>
              <RippleAnimation historyColor={historyColor} />
              <div className=" absolute flex justify-center items-center ">
                <Image
                  width={150}
                  height={150}
                  src={urlForThumbnail(data.logoImage.asset._ref)}
                  alt="company logo"
                  className="object-contain"
                />
              </div>
            </Styled.Rippleposition>
          </GridColumn>
          <GridColumn xs={12} lg={4}>
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Styled.Cardone historyColor={historyColor}>
                <h1 className="font-bold text-xl">
                  <RemoveRedEyeOutlinedIcon fontSize="large" />
                  Values
                </h1>
                <Styled.content>{data.cardonedata}</Styled.content>
              </Styled.Cardone>
              <Styled.Cardsecond historyColor={historyColor}>
                <h1 className="font-bold text-xl">
                  <RadarIcon fontSize="large" /> Vision
                </h1>
                <Styled.content>{data.cardtwodata}</Styled.content>
              </Styled.Cardsecond>
            </div>
          </GridColumn>
        </GridRow>
      ))}
    </Styled.Main>
  );
};

export default AboutUsSection;
