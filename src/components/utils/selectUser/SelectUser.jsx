import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUserByIdAction,
  cleanUserByIdAction,
} from "../../../redux/actions/actionsUsers";
import IconUser from "./IconUser";

const SelectUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  console.log("user", user);
  //const [userId, setUserId] = useState("");

  const selectHandler = async (e) => {
    const value = e.target.value;
    if (value === "") {
      localStorage.removeItem("userId");
      dispatch(cleanUserByIdAction());
    } else {
      localStorage.setItem("userId", value);
      dispatch(getUserByIdAction(value));
      //console.log("despacho la accion con id ", value);
    }
  };

  return (
    <div className="flex items-center">
      <div>
        {!user ? (
          <img src="/noUser.svg" />
        ) : user.image ? (
          user.image
        ) : (
          <IconUser name={user.name} />
        )}
        {/* {user && user.image ? user.image : <img src="/noUser.svg" />} */}
      </div>
      <div>
        <select
          name="selectUser"
          onChange={selectHandler}
          value={user ? user.id : ""}
          className="text-md bg-sky-950 rounded-2xl text-white text-base font-normal font-['Oswald'] capitalize ml-3"
        >
          <option value="" hidden={!user}>
            usuario...
          </option>
          {users &&
            users.map((user, index) => {
              return (
                <option key={index} value={user.id}>
                  {user.name.toUpperCase()}
                  {/* {console.log("user ", index, ": ", user.id)} */}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default SelectUser;
