import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.js";
import { StateProvider } from "../common/StateContext.js";

describe("App", () => {
  test("renders correct UI", () => {
    const { container } = render(
      <StateProvider>
        <App />
      </StateProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
