import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByContactAction } from "../../redux/actions/actionFilters";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState("");

  //handler que setea el estado local
  const handlerChange = (e) => {
    setContact(e.target.value);
  };

  //handler que despacha la action searchByName
  const handlerDispatch = async () => {
    dispatch(searchByContactAction(contact));
    setContact(""); //setea constact al estado inicial
  };

  return (
    <div className="w-64 h-[1.75rem] bg-white drop-shadow rounded-[30px] flex items-center gap-1 pl-1">
      <input
        className=" w-44 bg-white text-sm pl-2 font-normal font-['Inter'] rounded-[30px] focus:outline-none"
        type="search"
        value={contact}
        onChange={handlerChange}
        placeholder="contacto..."
      />
      <button
        className="px-3 py-1 h-6 bg-white hover:bg-amber-500 rounded-[30px] shadow-inner text-sm font-normal font-['Oswald'] flex items-center"
        onClick={handlerDispatch}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
