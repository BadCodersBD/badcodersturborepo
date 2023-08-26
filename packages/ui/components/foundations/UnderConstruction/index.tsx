import React from "react";
import { UnderConstruct } from "./UnderConstruct";

const UnderConstruction: React.FC = () => (
  <div className="my-24 w-screen flex justify-center">
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl font-semibold"> This page is under construction!</h1>
      <UnderConstruct width={20} height={20} />
    </div>
  </div>
);

export default UnderConstruction;
