import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import socialMediaJson from "../../../../public/json/socialMediaJson";
import statesJson from "../../../../public/json/statesJson";
import { filterBySocialMediaAction } from "../../../redux/actions/actionFilters";

const FilterByState = () => {
  const dispatch = useDispatch();

  //paso a mayusculas los estados
  const statesUpper = statesJson.map((state) => {
    return {
      ...state,
      name: state.name.toUpperCase(),
    };
  });

  // Estado para almacenar el filtro seleccionado
  const [selectedFilter, setSelectedFilter] = useState("TODOS");

  // Función para manejar el cambio de estado de un radio button
  const handlerOnChange = (e) => {
    setSelectedFilter(e.target.value);
    // Despachar la acción de Redux con el valor del filtro seleccionado
    dispatch(filterBySocialMediaAction(e.target.value));
  };

  return (
    <div className="absolute top-80 mt-10">
      {statesUpper &&
        statesUpper.map((state, index) => {
          return (
            <div key={index} className="flex items-center mt-3">
              <img src={state.icon} className="w-8 h-8" />
              <label className=" text-white text-sm font-normal font-['Oswald'] capitalize ml-3 ">
                {state.name}
                <input
                  type="radio"
                  value={state.name}
                  checked={selectedFilter === `${state.name}`}
                  onChange={handlerOnChange}
                  className=" absolute -right-11 w-5 h-5 accent-amber-400"
                />
              </label>
              <br />
            </div>
          );
        })}
      <div className="flex items-center mt-4">
        <img src="/iconoLogoBlanco.svg" className="w-8 h-8" />
        <label className=" text-white text-sm font-normal font-['Oswald'] capitalize ml-3 ">
          TODOS
          <input
            type="radio"
            value="TODOS"
            checked={selectedFilter === "TODOS"}
            onChange={handlerOnChange}
            className=" absolute -right-11 w-5 h-5 accent-amber-400"
          />
        </label>
        <br />
      </div>
    </div>
  );
};

export default FilterByState;
