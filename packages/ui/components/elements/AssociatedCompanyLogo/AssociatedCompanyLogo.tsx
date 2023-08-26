import Image from "next/image";
import { useState } from "react";

export const AssociateCompanyLogo = () => {
  const [imageData] = useState([
    {
      path: "/assets/reg_logo/aladdin.png",
      name: "aladdin",
    },
    {
      path: "/assets/reg_logo/avl.png",
      name: "akij-venture",
    },
    {
      path: "/assets/reg_logo/akij_food_beverage.png",
      name: "akij-food-beverage",
    },
    {
      path: "/assets/reg_logo/akij_dairy.png",
      name: "akij-dairy",
    },
    {
      path: "/assets/reg_logo/takaful.png",
      name: "akij-takaful",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between py-2 text-white">
        {imageData.map((item, index) => (
          <Image
            className="h-9 w-12"
            height={100}
            width={200}
            key={index}
            src={item.path}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
};
