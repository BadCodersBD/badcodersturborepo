import type { PaymentIconType } from "../../../../../types/type";
import { fetchPaymentIcon } from "../../../../../utils/fetchPayment";
import { urlForThumbnail } from "../../../../../utils/imageProcess";
import { GenericSpinner } from "@/components/ui/element/GenericSpinner/GenericSpinner";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const PaymentIcon = () => {
  const [PaymentIcon, setPaymentIcon] = useState<PaymentIconType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const Payment = await fetchPaymentIcon();
        setPaymentIcon(Payment);
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
      {PaymentIcon.map((Data, index) => (
        <div key={index}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ objectFit: "cover", width: "80px", height: "50px", borderRadius: '10px' }}
              src={urlForThumbnail(Data.image)}
              alt={Data.title}
            />
        </div>
      ))}
    </div>
  );
};

export default PaymentIcon;
