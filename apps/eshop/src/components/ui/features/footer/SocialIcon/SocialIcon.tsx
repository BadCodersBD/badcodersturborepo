import type { SocialIconType } from "../../../../../types/type";
import { fetchSocialIcon } from "../../../../../utils/fetchSocialIcon";
import { urlForThumbnail } from "../../../../../utils/imageProcess";
import { GenericSpinner } from "@/components/ui/element/GenericSpinner/GenericSpinner";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const SocialIcon = () => {
  const [SocialIcon, setSocialIcon] = useState<SocialIconType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const Social = await fetchSocialIcon();
        setSocialIcon(Social);
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
    <div className="flex gap-4 w-full h-auto">
      {SocialIcon.map((Data, index) => (
        <Link href={Data.url} key={index}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              src={urlForThumbnail(Data.image)}
              alt={Data.title}
            />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcon;
