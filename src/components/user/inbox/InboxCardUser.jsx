// import PropTypes from "prop-types";
//import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";
import SocialMediaIcons from "../../utils/icons/socialMediaIcons";
import FormattedTimestamp from "../../utils/FormatedTimeStamp";
import {
  updateStateMessageReceivedAction,
  updateActiveMessageReceivedAction,
} from "../../../redux/actions/actionMessages";

const InboxCardUser = ({
  id,
  name,
  state,
  timestamp,
  active,
  SocialMedium,
  ContactId,
  messagesReceived,
}) => {
  //console.log("redSocial", SocialMedium.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socialMediaName = SocialMedium ? SocialMedium.name : "red Social";
  //console.log("red social", socialMediaName);
  const upperSMName = socialMediaName && socialMediaName.toUpperCase();
  console.log("red social en mayuscula", upperSMName, id);

  const msgActive =
    messagesReceived && messagesReceived.find((message) => message.active);

  const allMsgByContact =
    messagesReceived &&
    messagesReceived.filter((message) => message.ContactId === ContactId);
  const noReadMsg =
    allMsgByContact &&
    allMsgByContact.filter((message) => message.state === "No Leidos");

  const onClickHandler = (id) => {
    if (msgActive) {
      dispatch(updateActiveMessageReceivedAction(msgActive.id));
    }
    dispatch(updateActiveMessageReceivedAction(id));
    navigate(`/inboxDetailUser/${id}`);
    noReadMsg.forEach((message) =>
      dispatch(updateStateMessageReceivedAction(message.id))
    );
  };

  return (
    <button
      className="bg-transparent border-none m-0 p-0"
      onClick={() => onClickHandler(id)}
    >
      {!active ? (
        <div className="w-72 h-28 relative shadow-inner bg-green-400 flex items-center justify-between p-2">
          <div className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2">
            <SocialMediaIcons socialMediaName={upperSMName} />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
              {name}
              <br />
            </span>
            <div className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
              <FormattedTimestamp timestamp={timestamp} />
              <br />
            </div>
          </div>
          <div className="flex flex-col items-end mr-6">
            <div className="w-10 h-10 bg-white rounded-full mb-1">
              <StateMessagesIcons state={state} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-72 h-28 relative shadow-inner bg-white flex items-center justify-between p-2">
          <div className="w-full h-full flex items-center justify-between bg-transparent border-l-4 border-t-4 border-b-4 border-amber-500">
            <div className="flex items-center">
              <div className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2">
                <SocialMediaIcons socialMediaName={upperSMName} />
              </div>
              <div className="flex flex-col justify-center ml-8">
                <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
                  {name}
                  <br />
                </span>
                <span className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
                  <FormattedTimestamp timestamp={timestamp} />
                  <br />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end mr-4">
              <div className="w-10 h-10 bg-white rounded-full mb-1">
                <StateMessagesIcons state={state} />
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

// InboxCardUser.propTypes = {
//   name: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

export default InboxCardUser;
