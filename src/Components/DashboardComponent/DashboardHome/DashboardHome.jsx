import React from "react";
// import DashboardSlider from "../DashboardSlider/DashboardSlider";

const DashboardHome = () => {
  return (
    <div className="px-2">
      <div className="flex ">
        {/* content */}
        <div className="w-[80%]">{/* <DashboardSlider /> */}</div>
        {/* sidebar */}
        <div className="w-[20%]">sidebar</div>
      </div>
    </div>
  );
};

export default DashboardHome;
