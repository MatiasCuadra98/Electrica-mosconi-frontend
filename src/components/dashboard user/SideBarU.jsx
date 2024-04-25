import React from "react";
import SelectUser from "../utils/selectUser/SelectUser";
import FilterBySocialMedia from "../utils/filters/FilterBySocialMedia";
import FilterByState from "../utils/filters/FilterByState";
import ResetButtom from "../utils/buttons/ResetButton";
import GoHomeButton from "../utils/buttons/GoHomeButton";

const SideBarU = () => {
  return (
    <div className="w-56 h-screen bg-sky-950  sticky top-0 p-4">
      <img src="/logo.svg" />
      <SelectUser />
      <FilterBySocialMedia />
      <FilterByState />
      <ResetButtom />
      <GoHomeButton />
    </div>
  );
};

export default SideBarU;
