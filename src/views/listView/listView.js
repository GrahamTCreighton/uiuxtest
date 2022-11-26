import { useContext } from "react";
import MessageList from "./messageList/messageList.js";
import EmptyList from "./emptyList/emptyList.js";
import { StateContext } from "../../common/StateContext";
import moment from "moment";
import CONSTANTS from "../../common/constants";

export default function ListView() {
  const { state } = useContext(StateContext);
  const showMessageList =
    state.messages && Object.keys(state.messages).length > 0;
  const orderedMessages = Object.values(state.messages).sort((msgA, msgB) => {
    const dateA = moment(
      `${msgA.date} ${msgA.time}`,
      `${CONSTANTS.DATEHTMLFORMAT} ${CONSTANTS.TIMEHTMLFORMAT}`
    );
    const dateB = moment(
      `${msgB.date} ${msgB.time}`,
      `${CONSTANTS.DATEHTMLFORMAT} ${CONSTANTS.TIMEHTMLFORMAT}`
    );
    return dateA.isAfter(dateB) ? 1 : -1;
  });
  // const visibleMessages = state.messages.filter(message, index)
  return showMessageList ? (
   <MessageList messages={orderedMessages} />
  ) : (
    <EmptyList />
  );
}
