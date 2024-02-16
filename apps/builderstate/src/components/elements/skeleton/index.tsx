import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const SkeletionUi = () => {
  return (
    <Card className="w-[100%] m-4 p-4" radius="md">
    <Skeleton className="rounded-lg my-1">
      <div className="h-24 rounded-lg bg-default-300"></div>
    </Skeleton>
    <div className="space-y-3">
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-4/5 rounded-lg">
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">  
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">  
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  </Card>
  );
};

export default SkeletionUi;
