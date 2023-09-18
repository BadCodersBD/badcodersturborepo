import type { LogoPropsType } from "../../../../../types/type";
import { fetchlogo } from "../../../../../utils/fetchLogo";
import { urlForThumbnail } from "../../../../../utils/imageProcess";
import { GenericSpinner } from "../../../element/GenericSpinner/GenericSpinner";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Aboutlogo = () => {
  const [Logos, setLogo] = useState<LogoPropsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const logo = await fetchlogo();
        setLogo(logo);
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
        <GenericSpinner diameter={50} />
      </div>
    );
  }

  return (
    <div>
      {Logos.map((Data, index) => (
        <div key={index}>
          {/* <h1 className="text-xl font-bold">{Data.logoname}</h1> */}
          <Image
            src={urlForThumbnail(Data.logoimage)}
            alt={Data.logoname}
            width={150}
            height={100}
            sizes="100vw"
          />
          <h1 className="text-start">{Data.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Aboutlogo;
