import React from "react";
import Image from "next/image";
import type { QuantityProps } from "../../../../types/ShoppingCart";

const QuantityCount = (props: QuantityProps) => {
  return (
    <div className="flex items-center gap-1 py-2">
      <div className="relative h-6 w-6">
        <Image
          fill
          src={props.image}
          alt="s-bottle"
          className="object-contain"
        />
      </div>
      <p className="flex gap-1">
        <span>{props.quantity}</span>
        <span>x</span>
        <span className="font-bold">৳</span>
        <span className="text-sm font-mono">{props.price}</span>
      </p>
    </div>
  );
};

export default QuantityCount;
