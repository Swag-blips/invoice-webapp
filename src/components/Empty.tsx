import React from "react";
import illustrationEmpty from "/assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="flex items-center flex-col mt-20 justify-center">
      <img src={illustrationEmpty} alt="illustration-empty" />
      <h1 className="text-2xl dark:text-white  font-bold tracking-[-0.75px] mt-[66px]">
        There is nothing here
      </h1>
      <p className="text-center text-[13px] text-[#888EB0] mt-6">
        Create a <span className="font-bold">new invoice</span> by clicking the
        New Invoice button and get started
      </p>
    </div>
  );
};

export default Empty;
