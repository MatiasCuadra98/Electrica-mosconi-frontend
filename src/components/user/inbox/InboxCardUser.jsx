import React from "react";
import IconUser from "../../utils/selectUser/IconUser";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";

const InboxCardUser = (props) => {
  // const userName = props.state === 'Respondidos' ? props.msgSent.user.name : null;
  let userName = null;
  console.log("mensajes", props);

  return (
    <div className="w-72 h-28 relative shadow-inner bg-green-400 flex items-center justify-between p-2">
      <img
        src="/socialMediaImage/telegram.svg"
        className="w-12 h-12 opacity-90 rounded-full border-2 border-white mr-2"
      />
      <div className="flex flex-col justify-center">
        <span className="text-black text-lg font-normal font-['Oswald'] capitalize">
          {props.props.name}
          <br />
        </span>
        <span className="text-black text-[13px] font-normal font-['Oswald'] capitalize">
          {props.props.timestamp}
          <br />
        </span>
      </div>
      <div className="flex flex-col items-end mr-6">
        <div className="w-10 h-10 bg-white rounded-full mb-1">
          <StateMessagesIcons state={props.props.state} />
        </div>
        <IconUser name={userName} />
      </div>
    </div>
  );
};

export default InboxCardUser;
