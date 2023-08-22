import React, { useState, useEffect } from "react";
import { Styled } from "./UserWidget.styled";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { fetchcv } from '../../../../../utils/fetchcv';
import type { ResumeType } from '../../../../../types/type';

const UserWidget = () => {
  const [Resume, setCv] = useState<ResumeType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cv = await fetchcv();
        setCv(cv);
      } catch (e) {
        console.log("Error", e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {Resume.map((data, index) => (
    <div key={index} className="flex justify-center space-x-4 py-5 px-2 text-black">
      <Styled.Url href={data.url}>
        Dowbnlod CV
        <CloudDownloadIcon/>
      </Styled.Url>
    </div>
    ))}
    </>
  );
};

export default UserWidget;
