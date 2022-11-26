import { Fragment, useState, useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import CONSTANTS from "../../../common/constants.js";
import texts from "../../../common/texts.js";
import actions from "../../../common/actions.js";
import moment from "moment";

export default function MessageModal() {
  const { dispatch } = useContext(StateContext);
  const [message, setMessage] = useState();

  const dateIn10min = moment().add(10, "minutes");

  const initialDate = dateIn10min.format(CONSTANTS.DATEHTMLFORMAT);

  const initialTime = dateIn10min.format(CONSTANTS.TIMEHTMLFORMAT);

  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  const charactersLeft = message
    ? CONSTANTS.TWITTERMAXCHARACTERS - message.length
    : CONSTANTS.TWITTERMAXCHARACTERS;

  const dateTimeValidationError =
    date &&
    time &&
    moment() >
      moment(
        `${date} ${time}`,
        `${CONSTANTS.DATEHTMLFORMAT} ${CONSTANTS.TIMEHTMLFORMAT}`
      );

  const messageValidationError =
    (message && !message.length) || charactersLeft < 0;

  const validationError =
    !message ||
    !date ||
    !time ||
    messageValidationError ||
    dateTimeValidationError;

  const handleMessageChange = ({ name, value }) => {
    setMessage(value);
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const inputs = {
      message: handleMessageChange,
      date: () => setDate(target.value),
      time: () => setTime(target.value),
    };
    inputs[target.name] && inputs[target.name](target);
  };
  const saveMessage = () => {
    dispatch({
      type: actions.ADD_MESSAGE,
      data: {
        message,
        date,
        time,
      },
    });
    closeMessageModal();
  };
  const closeMessageModal = () => {
    dispatch({ type: actions.CLOSE_MESSAGE_MODAL });
  };
  return (
    <Fragment>
      <div
        data-testid="dialog-background"
        onClick={closeMessageModal}
      ></div>
      <dialog open>
        <div>
          <h3>{texts["message-modal-title"]}</h3>
          <button
            data-testid="close-button"
            onClick={closeMessageModal}>
            {texts["close"]}
          </button>
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            value={message}
            data-testid="message-modal-textarea"
            data-error={messageValidationError}
            onChange={handleInputChange}
          />
        </div>
        <div
          data-error={charactersLeft < 0}
        >
          <p>{charactersLeft}</p>
        </div>
        <div>
          <div>
            <h4>{texts["message-modal-schedule"]}</h4>
            <p>{`Timezone: ${
              Intl.DateTimeFormat().resolvedOptions().timeZone
            }`}</p>
          </div>
          <div>
            <input
              type="date"
              name="date"
              data-error={dateTimeValidationError}
              data-testid="message-modal-date"
              value={date}
              min={moment().format(CONSTANTS.DATEHTMLFORMAT)}
              onChange={handleInputChange}
            />
            <input
              type="time"
              name="time"
              data-error={dateTimeValidationError}
              data-testid="message-modal-time"
              value={time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <p>
            {dateTimeValidationError
              ? texts["message-modal-schedule-error"]
              : ""}
          </p>
          <button
            type="cancel"
            data-testid="message-modal-cancel"
            onClick={closeMessageModal}
          >
            {texts["cancel"]}
          </button>
          <button
            disabled={validationError}
            type="save"
            data-testid="message-modal-save"
            onClick={saveMessage}
          >
            {texts["save"]}
          </button>
        </div>
      </dialog>
    </Fragment>
  );
}
