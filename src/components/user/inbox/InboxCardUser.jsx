import PropTypes from "prop-types";
//import React from "react";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconUser from "../../utils/selectUser/IconUser";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";
// import {
//   updateActiveMessageReceivedAction,
//   deactivateAllMessagesReceivedAction,
// } from "../../../redux/actions/actionMessages";


const InboxCardUser = ({name, state, timestamp, id}) => {
   const formattedTimestamp = new Date(parseInt(timestamp)).toLocaleString();
  // const userName = props.state === 'Respondidos' ? props.msgSent.user.name : null;
  let userName = null;
  //falta hacer que: 1-se refleje automaticamente el cambio de active
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    // dispatch(deactivateAllMessagesReceivedAction());
    // dispatch(updateActiveMessageReceivedAction(id));
    navigate(`/inboxDetailUser/${id}`);
  };

  return (
    <button
      className="bg-transparent border-none m-0 p-0"
      onClick={() => onClickHandler(id)}
    >
      {/* {!props.props.active ? ( */}
      <div className="w-72 h-28 relative shadow-inner bg-green-400 flex items-center justify-between p-2">
        <img
          src="/socialMediaImage/telegram.svg"
          className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2"
        />
        <div className="flex flex-col justify-center">
          <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
            {name}
            <br />
          </span>
          <span className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
            {formattedTimestamp}
            <br />
          </span>
        </div>
        <div className="flex flex-col items-end mr-6">
          <div className="w-10 h-10 bg-white rounded-full mb-1">
            <StateMessagesIcons state={state} />
          </div>
          <IconUser name={userName} />
        </div>

      </div>
      {/* ) : (
        <div className="w-72 h-28 relative shadow-inner bg-white flex items-center justify-between p-2">
          <div className="w-full h-full flex items-center justify-between bg-transparent border-l-4 border-t-4 border-b-4 border-amber-500">
            <div className="flex items-center">
              <img
                src="/socialMediaImage/telegram.svg"
                className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2"
              />
              <div className="flex flex-col justify-center ml-8">
                <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
                  {props.props.name}
                  <br />
                </span>
                <span className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
                  {props.props.timestamp}
                  <br />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end mr-4">
              <div className="w-10 h-10 bg-white rounded-full mb-1">
                <StateMessagesIcons state={props.props.state} />
              </div>
              <IconUser name={userName} />
            </div>
          </div>
        </div>
      )} */}
    </button>
  );
};

InboxCardUser.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InboxCardUser;
