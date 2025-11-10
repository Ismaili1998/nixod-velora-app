import React from "react";
import { Spin } from "antd";

const PageLoader = () => {
  return (
    <div className="absolute left-1/2 top-1/2 w-8 h-9 -ml-4 -mt-[19px]">
      <Spin />
    </div>
  );
};
export default PageLoader;
