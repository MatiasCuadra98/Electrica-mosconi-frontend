import PropTypes from "prop-types";
import IconUser from "../../utils/selectUser/IconUser";
import StateMessagesIcons from "../../utils/icons/StateMessagesIcons";

const InboxCardUser = ({ name, timestamp, state }) => {
  // Formatear timestamp a fehca y hora real
  const formattedTimestamp = new Date(parseInt(timestamp)).toLocaleString();

  return (
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
        <IconUser name={null} />
      </div>
    </div>
  );
};

InboxCardUser.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default InboxCardUser;
