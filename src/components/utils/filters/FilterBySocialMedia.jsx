import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import socialMediaJson from "../../../../public/json/socialMediaJson";
import { filterBySocialMediaAction } from "../../../redux/actions/actionFilters";

const FilterBySocialMedia = () => {
  const dispatch = useDispatch();

  //paso a mayusculas y ordeno alfabeticamente las redes sociales
  const socialMediaUpper = socialMediaJson.map((sm) => {
    return {
      ...sm,
      name: sm.name.toUpperCase(),
    };
  });

  const sortSocialMedia = socialMediaUpper.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
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
    <div className="absolute top-36 mt-3">
      {sortSocialMedia &&
        sortSocialMedia.map((sm, index) => {
          return (
            <div key={index} className="flex items-center mt-3">
              <img src={sm.icon} className="w-8 h-8" />
              <label className=" text-white text-sm font-normal font-['Oswald'] capitalize ml-3 ">
                {sm.name}
                <input
                  type="radio"
                  value={sm.name}
                  checked={selectedFilter === `${sm.name}`}
                  onChange={handlerOnChange}
                  className=" absolute -right-9 w-5 h-5 accent-amber-400"
                />
              </label>
              <br />
            </div>
          );
        })}
      <div className="flex items-center mt-4">
        <img src="/logos/iconoLogoBlanco.svg" className="w-8 h-8" />
        <label className=" text-white text-sm font-normal font-['Oswald'] capitalize ml-3 ">
          TODOS
          <input
            type="radio"
            value="TODOS"
            checked={selectedFilter === "TODOS"}
            onChange={handlerOnChange}
            className=" absolute -right-9 w-5 h-5 accent-amber-400"
          />
        </label>
        <br />
      </div>
    </div>
  );
};

export default FilterBySocialMedia;
