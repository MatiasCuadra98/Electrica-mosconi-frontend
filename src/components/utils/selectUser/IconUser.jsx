import React from "react";

const IconUser = ({ name }) => {
  const nameArray = name ? name.split(" ") : null;
  const firstNameI = name ? nameArray[0].chartA(0).toUpperCase() : null;
  const lastNameI = name ? nameArray[length - 1].chartA(0).toUpperCase() : null;
  const fullNameI = name ? `${firstNameI} ${lastNameI}` : null;

  return (
    <div>
      {fullNameI === null ? (
        <img
          src="/noUser.svg"
          className=" w-10 h-10 rounded-full drop-shadow-lg"
        />
      ) : firstNameI === "A" ||
        firstNameI === "F" ||
        firstNameI === "K" ||
        firstNameI === "O" ||
        firstNameI === "T" ||
        firstNameI === "Y" ? (
        <div className="bg-sky-950 w-10 h-10 rounded-full drop-shadow-lg">
          <h1>{fullNameI}</h1>
        </div>
      ) : firstNameI === "B" ||
        firstNameI === "G" ||
        firstNameI === "L" ||
        firstNameI === "P" ||
        firstNameI === "U" ||
        firstNameI === "Z" ? (
        <div className="bg-green-400 w-10 h-10 rounded-full drop-shadow-lg">
          <h1>{fullNameI}</h1>
        </div>
      ) : firstNameI === "C" ||
        firstNameI === "H" ||
        firstNameI === "M" ||
        firstNameI === "Q" ||
        firstNameI === "V" ? (
        <div className="bg-amber-500 w-10 h-10 rounded-full drop-shadow-lg">
          <h1>{fullNameI}</h1>
        </div>
      ) : firstNameI === "D" ||
        firstNameI === "I" ||
        firstNameI === "N" ||
        firstNameI === "R" ||
        firstNameI === "W" ? (
        <div className="bg-neutral-200 w-10 h-10 rounded-full drop-shadow-lg">
          <h1>{fullNameI}</h1>
        </div>
      ) : (
        <div className="bg-stone-300 w-10 h-10 rounded-full drop-shadow-lg">
          <h1>{fullNameI}</h1>
        </div>
      )}
    </div>
  );
};

export default IconUser;
