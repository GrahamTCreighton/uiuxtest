import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App.js";
import { StateProvider } from "../../../common/StateContext.js";
import texts from "../../../common/texts.js";
import userEvent from "@testing-library/user-event";

const addMessage = () => {
  const buttonAdd = screen.getByTestId("add-message");
  fireEvent.click(buttonAdd);
  userEvent.type(screen.getByTestId("message-modal-textarea"), "Hello, World!");
  userEvent.type(screen.getByTestId("message-modal-date"), "3010-10-10");
  userEvent.type(screen.getByTestId("message-modal-time"), "00:00");
  let buttonSave = screen.getByTestId("message-modal-save");
  fireEvent.click(buttonSave);
};
describe("messageList", () => {
  it("opens create modal when add message button is pressed", () => {
    // we need to render App because that's where the modal shows (it's a portal)
    const { getByTestId, getByText } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    addMessage();
    let button = getByTestId("message-list-add-message");
    fireEvent.click(button);

    const modalHeader = getByText(texts["message-modal-title"]);
    expect(modalHeader).toBeInTheDocument();
  });
});
