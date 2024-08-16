import { useSelector } from "react-redux";
import IconUser from "../selectUser/IconUser";
import FormattedTimestamp from "../FormatedTimeStamp";

const MsgSent = (props) => {
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === props.props.UserId);
  //console.log("usuario filtro", user);
  const userName = user ? user.name : null;
  //console.log("nombre", userName);

  return (
    <div className="w-full flex justify-end">
      <div className="w-[473px] h-auto bg-stone-300 rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] p-4 flex flex-col justify-between m-4 self-end mr-10">
        <div className="text-center mb-4">
          <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
            {props.props.message}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-4">
          {/* <p className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize">
            {props.props.timestamp}
          </p> */}
          <div className="w-[74px] h-[18px] text-black text-[13px] font-normal font-['Oswald'] capitalize">
            <FormattedTimestamp timestamp={props.props.timestamp} />
          </div>
          <IconUser name={userName} />
        </div>
      </div>
    </div>
  );
};

export default MsgSent;
