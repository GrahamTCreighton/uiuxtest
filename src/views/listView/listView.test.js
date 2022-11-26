import React from "react";
import ListView from "./listView.js";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import texts from "../../common/texts.js";
import { StateProvider } from "../../common/StateContext.js";
import userEvent from "@testing-library/user-event";
import App from "../App.js";

describe("listView", () => {
  test("renders empty list if there are no messages", () => {
    const { getByText } = render(
      <StateProvider>
        <ListView />
      </StateProvider>
    );
    const button = getByText(texts["add-message"]);
    expect(button).toBeVisible();
  });
  test("renders messages list if there are messages", () => {
    const { getByTestId } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    const buttonAdd = getByTestId("add-message");
    fireEvent.click(buttonAdd);
    userEvent.type(getByTestId("message-modal-textarea"), "Hello, World!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-10");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    let buttonSave = getByTestId("message-modal-save");
    fireEvent.click(buttonSave);
    const list = getByTestId("message-list");
    expect(list).toBeVisible();
  });
  test("orders the messages by ascending posting date", () => {
    const { getByTestId } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    const buttonAdd = getByTestId("add-message");
    fireEvent.click(buttonAdd);
    userEvent.type(getByTestId("message-modal-textarea"), "Hello, World!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-10");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    let buttonSave = getByTestId("message-modal-save");
    fireEvent.click(buttonSave);

    const buttonAddList = getByTestId("message-list-add-message");
    fireEvent.click(buttonAddList);
    userEvent.type(getByTestId("message-modal-textarea"), "Hola, Mundo!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-08");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    buttonSave = getByTestId("message-modal-save");
    fireEvent.click(buttonSave);

    fireEvent.click(buttonAddList);
    userEvent.type(getByTestId("message-modal-textarea"), "Witaj, świecie!");
    userEvent.type(getByTestId("message-modal-date"), "3010-10-09");
    userEvent.type(getByTestId("message-modal-time"), "00:00");
    buttonSave = getByTestId("message-modal-save");
    fireEvent.click(buttonSave);

    const list = getByTestId("message-list");
    expect(list.childNodes[0].textContent).toContain("Hola, Mundo!");
    expect(list.childNodes[1].textContent).toContain("Witaj, świecie!");
    expect(list.childNodes[2].textContent).toContain("Hello, World!");
  });
});
