import React from "react";
import SelectUser from "../utils/selectUser/SelectUser";
import FilterBySocialMedia from "../utils/filters/FilterBySocialMedia";
import FilterByState from "../utils/filters/FilterByState";
import ResetButtom from "../utils/buttons/ResetButton";
import GoHomeButton from "../utils/buttons/GoHomeButton";

const SideBarU = () => {
  return (
    <div className="w-52 h-screen bg-sky-950  sticky top-0 p-4">
      <img className="w-24 h-auto absolute top-3.5 left-12" src="/logo.svg" />
      <SelectUser />
      <FilterBySocialMedia />
      <FilterByState />
      <div className=" absolute bottom-5 left-1/2 transform -translate-x-1/2 gap-4">
        <ResetButtom />
        <GoHomeButton />
      </div>
    </div>
  );
};

export default SideBarU;
