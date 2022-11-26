import ListView from "./listView/listView.js";
import MessageView from "./messageView/messageView.js";
import { useContext } from "react";
import { StateContext } from "../common/StateContext.js";

export default function App() {
  const { state } = useContext(StateContext);

  return (
    <div>
      <ListView />
      {state.showMessageModal && <MessageView />}
    </div>
  );
}
