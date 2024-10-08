import React from "react";
import SelectUser from "../utils/selectUser/SelectUser";
import FilterBySocialMedia from "../utils/filters/FilterBySocialMedia";
import FilterByState from "../utils/filters/FilterByState";
import ResetButtom from "../utils/buttons/ResetButton";
import GoHomeButton from "../utils/buttons/GoHomeButton";

const SideBarU = () => {
  return (
    <div className="w-52 h-screen bg-sky-950 fixed top-0">
      <img
        src="/logos/logo.svg"
        alt="Logo"
        className="w-24 h-auto mt-4 mx-auto z-50"
      />
      <div className="flex flex-col justify-between pt-8">
        <SelectUser />
        <div className="mt-4">
          <FilterBySocialMedia />
        </div>
        <div className="mt-4">
          <FilterByState />
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="mb-2">
            <ResetButtom />
          </div>
          <GoHomeButton />
        </div>
      </div>
    </div>
  );
};

export default SideBarU;
