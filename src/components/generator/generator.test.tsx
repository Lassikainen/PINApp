import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Renders starting components correctly", () => {
  test("Renders Buttons", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("GENERATE")).toBeInTheDocument();
    expect(screen.getByText("SAVE")).toBeInTheDocument();
  });

  test("Generate Button is enabled and Save is disabled on page load", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("GENERATE")).toBeEnabled();
    expect(screen.getByText("SAVE")).toBeDisabled();
  });
});

describe("PINs generated correctly", () => {
  test("Generating a PIN will place a PIN onto the screen - each of the pin containers will contain a 4 digit number", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("GENERATE"));

    const pinContainers = await screen.findAllByTestId("new-pin-container");
    pinContainers.forEach((container) => {
      expect(container).toHaveTextContent(/[0-9]{4}/);
    });
  });

  test("Generating a PIN enables Save Button. Generate is still enabled", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("GENERATE"));

    expect(screen.getByText("GENERATE")).toBeEnabled();
    expect(screen.getByText("SAVE")).toBeEnabled();
  });

  test("Saving a PIN will disable the Save Button", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("GENERATE"));
    fireEvent.click(screen.getByText("SAVE"));

    expect(screen.getByText("GENERATE")).toBeEnabled();
    expect(screen.getByText("SAVE")).toBeDisabled();
  });
});
