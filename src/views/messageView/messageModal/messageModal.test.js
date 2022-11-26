import React from "react";
import MessageModal from "./messageModal.js";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../../App.js";
import { StateProvider } from "../../../common/StateContext.js";

describe("messageModal", () => {
  it("hides modal when close button is pressed", () => {
    // we need to render App because that's where the modal shows (it's a portal)
    const { getByTestId } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    // we need to trigger the messageModal because we rendered App
    let button = getByTestId("add-message");
    fireEvent.click(button);

    const buttonClose = getByTestId("close-button");
    fireEvent.click(buttonClose);
    expect(buttonClose).not.toBeInTheDocument();
  });
  it("hides modal when background is pressed", () => {
    // we need to render App because that's where the modal shows (it's a portal)
    const { getByTestId } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    // we need to trigger the messageModal because we rendered App
    let button = getByTestId("add-message");
    fireEvent.click(button);

    const buttonClose = getByTestId("dialog-background");
    fireEvent.click(buttonClose);
    expect(buttonClose).not.toBeInTheDocument();
  });
  it("save button is disabled at the beggining", () => {
    const { getByTestId } = render(
      <StateProvider>
        <MessageModal />
      </StateProvider>
    );
    let button = getByTestId("message-modal-save");
    expect(button).toBeDisabled();
  });
  it("save button is enabled if all required inputs are filled and date is in the future", () => {
    const { getByTestId } = render(
      <StateProvider>
        <MessageModal />
      </StateProvider>
    );
    userEvent.type(getByTestId("message-modal-textarea"), "Hello, World!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-10");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    let button = getByTestId("message-modal-save");
    expect(button).not.toBeDisabled();
  });
  it("closes modal after saving if all information is correct", () => {
    const { getByTestId } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    // we need to trigger the messageModal because we rendered App
    let button = getByTestId("add-message");
    fireEvent.click(button);
    userEvent.type(getByTestId("message-modal-textarea"), "Hello, World!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-10");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    let buttonSave = getByTestId("message-modal-save");
    fireEvent.click(buttonSave);
    expect(buttonSave).not.toBeInTheDocument();
  });
  it("save button is disabled if all required inputs are filled and date is in the past", () => {
    const { getByTestId } = render(
      <StateProvider>
        <MessageModal />
      </StateProvider>
    );
    userEvent.type(getByTestId("message-modal-textarea"), "Hello, World!");
    userEvent.type(getByTestId("message-modal-date"), "2010-10-10");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    let button = getByTestId("message-modal-save");
    expect(button).toBeDisabled();
  });
});
