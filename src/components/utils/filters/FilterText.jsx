import React from "react";
import { useSelector } from "react-redux";

const FilterText = () => {
  //const messages = useSelector((state) => state.messagesReceived);
  const socialMediaFilter = useSelector((state) => state.socialMediaFilter);
  const stateFilter = useSelector((state) => state.stateFilter);

  return (
    <div>
      {socialMediaFilter === "TODOS" && stateFilter !== "TODOS" ? (
        <span className="text-black text-base font-normal font-['Oswald']">
          No hay mensajes {stateFilter.toUpperCase()} en su OneInbox
        </span>
      ) : socialMediaFilter !== "TODOS" && stateFilter === "TODOS" ? (
        <span className="text-black text-base font-normal font-['Oswald']">
          No hay mensajes de {socialMediaFilter.toUpperCase()} en su OneInbox
        </span>
      ) : socialMediaFilter !== "TODOS" && stateFilter !== "TODOS" ? (
        <span className="text-black text-base font-normal font-['Oswald']">
          No hay mensajes {stateFilter.toUpperCase()} de{" "}
          {socialMediaFilter.toUpperCase()} en su OneInbox
        </span>
      ) : (
        <span className="text-black text-base font-normal font-['Oswald']">
          No hay mensajes en su OneInbox
        </span>
      )}
    </div>
  );
};

export default FilterText;
