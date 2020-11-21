import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

describe("Renders starting components", () => {
  test("renders App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
