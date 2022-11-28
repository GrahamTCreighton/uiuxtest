import { StateContext } from "../../../common/StateContext.js";
import { useContext, Fragment } from "react";
import texts from "../../../common/texts.js";
import actions from "../../../common/actions.js";
import CONSTANTS from "../../../common/constants.js";
import moment from "moment";

export default function MessageList({ messages }) {
  const { dispatch } = useContext(StateContext);

  return (
    <Fragment>
      <div>
        <h1>{texts["scheduled-tweets"]}</h1>
        <button
          data-testid="message-list-add-message"
          onClick={() => dispatch({ type: actions.OPEN_MESSAGE_MODAL })}
        >
          {texts["add-message"]}
        </button>
      </div>
      <ul data-testid="message-list">
        {messages.map(({ date, time, message, id }) => (
          <li key={id}>
            <div>
              <p>{`${moment(date, CONSTANTS.DATEHTMLFORMAT).format(
                "Do MMMM YYYY"
              )} at ${moment(time, CONSTANTS.TIMEHTMLFORMAT).format(
                "HH:mm"
              )}`}</p>
            </div>
            <div>
              <p>{message}</p>
            </div>
            <div>
              <button
                data-testid="message-list-delete-button"
                onClick={() =>
                  dispatch({ type: actions.DELETE_MESSAGE, data: id })
                }
              >
                {texts["delete"]}
              </button>
              <button // created button that takes in edit message on click
                data-testid="message-list-edit-button"
                onClick={() =>
                  dispatch({ type: actions.EDIT_MESSAGE, data: id })
                }
              >
                {texts["edit"]}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
