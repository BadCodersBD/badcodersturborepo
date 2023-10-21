import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const RentSuccessfull = () => {
  return (
    <div className="bg-white min-h-screen">
    <div className="flex justify-center items-center">
      <Image
        src="/tick.gif"
        width={0}
        height={0}
        sizes="100vw"
        alt="animation"
        style={{ width: "450px", height: "auto", objectFit: "contain" }}
      />
    </div>
    <div className="py-5">
    <h1 className="text-black text-center">Your Booking is Created Successfully</h1>
    {/* <h1 className="text-black text-center">Your Booking Id is: 123456789</h1> */}
    </div>
    <div className="flex justify-center items-center">
    <Link href="/" className=" border border-blue-700 rounded-3xl py-5 px-5 text-black hover:bg-blue-600 hover:text-white">Go back to Home</Link>
    </div>
    </div>
  );
};

export default RentSuccessfull;
