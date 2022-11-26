import React from "react";
import EmptyList from "./emptyList.js";
import { render, fireEvent } from "@testing-library/react";
import App from "../../App";
import texts from "../../../common/texts.js";
import "@testing-library/jest-dom";
import { StateProvider } from "../../../common/StateContext.js";

describe("emptyList", () => {
  it("renders correct snapshot", () => {
    const { container } = render(
      <StateProvider>
        <EmptyList />
      </StateProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it("shows modal when add message button is pressed", () => {
    // we need to render App because that's where the modal shows
    const { getByText, getByRole } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    const button = getByText(texts["add-message"]);
    fireEvent.click(button);
    const dialog = getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });
});
