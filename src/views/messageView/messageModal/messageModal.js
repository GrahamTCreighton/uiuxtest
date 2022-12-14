/** @jsxImportSource @emotion/react */
import { Fragment, useState, useContext } from "react";
import { StateContext } from "../../../common/StateContext.js";
import CONSTANTS from "../../../common/constants.js";
import texts from "../../../common/texts.js";
import actions from "../../../common/actions.js";
import moment from "moment";
import { Content } from "components/TypographyContent.jsx";
import { IconButton } from "components/IconButton.jsx";
import { InputForm } from "components/Input.jsx";
import { Button } from "components/Button.jsx";

export default function MessageModal() {
  const { state, dispatch } = useContext(StateContext); //added state parameter to context
  const [message, setMessage] = useState(state.editMessage?.message); // if message has been edited save to state

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
        id: state.editMessage && state.editMessage.id, // added id to save message
      },
    });
    closeMessageModal();
  };
  const closeMessageModal = () => {
    dispatch({ type: actions.CLOSE_MESSAGE_MODAL });
  };
  return (
    <Fragment>
      <div data-testid="dialog-background" onClick={closeMessageModal}></div>
      <dialog
        open
        css={{
          width: "448px",
          radius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          position: "relative",
          height: "341px",
        }}
      >
        <div>
          <IconButton
            iconName="Close"
            data-testid="close-button"
            onClick={closeMessageModal}
          >
            {texts["close"]}
          </IconButton>
          <Content as="div" size="bodyMedium">
            {texts["message-modal-title"]}
          </Content>
          <Button
            disabled={validationError}
            type="save"
            data-testid="message-modal-save"
            onClick={saveMessage}
          >
            {texts["save"]}
          </Button>
        </div>
        <div>
          <InputForm
            type="text"
            name="message"
            value={message}
            data-testid="message-modal-textarea"
            data-error={messageValidationError}
            onChange={handleInputChange}
          />
        </div>
        <div data-error={charactersLeft < 0}>
          <Content as="p" size="subheader">
            {charactersLeft}
          </Content>
        </div>
        <div>
          <div>
            <Content as="p" size="subheader">
              {texts["message-modal-schedule"]}
            </Content>
            <InputForm
              type="date"
              name="date"
              data-error={dateTimeValidationError}
              data-testid="message-modal-date"
              value={date}
              min={moment().format(CONSTANTS.DATEHTMLFORMAT)}
              onChange={handleInputChange}
            />
            <InputForm
              type="time"
              name="time"
              data-error={dateTimeValidationError}
              data-testid="message-modal-time"
              value={time}
              onChange={handleInputChange}
            />
            <p>{`Timezone: ${
              Intl.DateTimeFormat().resolvedOptions().timeZone
            }`}</p>
          </div>
          <div></div>
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
        </div>
      </dialog>
    </Fragment>
  );
}
