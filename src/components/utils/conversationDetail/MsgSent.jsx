
import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessagesReceivedAction } from "../../../redux/actions/actionMessages";
import IconUser from "../selectUser/IconUser";
import FormattedTimestamp from "../FormatedTimeStamp";

const MsgSent = (props) => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === props.props.UserId);
  //console.log("usuario filtro", user);
  const userName = user ? user.name : null;
  //console.log("nombre", userName);
  useEffect(() => {
    console.log("Socket en MsgSent:", socket); 

    if (socket) {
      socket.on("NEW_MESSAGE_SENT", (message) => {
        console.log("Nuevo mensaje enviado:", message);

        dispatch(getAllMessagesReceivedAction()); // Actualiza los mensajes enviados
        
      });
    }

    return () => {
      if (socket) {
        socket.off("NEW_MESSAGE_SENT");
      }
    };
  }, [socket, dispatch]);
  return (
    <div className="w-full flex justify-end">
      <div className="w-[473px] h-auto bg-stone-300 rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] p-4 flex flex-col justify-between m-4 self-end mr-10">
        <div className="text-center mb-4">
          <h2 className="w-[432px] h-auto text-black text-base font-normal font-['Inter']">
            {props.props.message}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-4">
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
