import React, { useState } from "react";
import Link from "next/link";

const RentSuccessfull = () => {
  return (
    <div>
      <h1>Your Booking is Created Successfully</h1>
      <h1>Your Booking Id is: 123456789</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default RentSuccessfull;
