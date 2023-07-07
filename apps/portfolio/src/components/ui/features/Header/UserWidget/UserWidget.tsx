import React, { useState, useEffect } from "react";import Link from "next/link"
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
      <Link href={data.url} className="flex rounded-lg border-2 w-full h-full border-green-500 py-1 px-3 hover:bg-green-600 hover:text-white">
        Dowbnlod CV
        <CloudDownloadIcon/>
      </Link>
    </div>
    ))}
    </>
  );
};

export default UserWidget;
