import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Does not render saved page on page load", () => {
  test("Does not render saved page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.queryByTestId("saved-page")).toBeNull();
  });
});

describe("Renders saved page after clicking Save div on header", () => {
  test("Does not render saved page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("Saved"));

    expect(screen.queryByTestId("saved-page")).toBeInTheDocument();
  });
});

describe("PIN Saved correctly", () => {
  test("Generating a PIN and saving creates a pin row on the saved page", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("Generate"));

    fireEvent.click(screen.getByText("GENERATE"));
    fireEvent.click(screen.getByText("SAVE"));

    fireEvent.click(screen.getByText("Saved"));

    const rows = await screen.findAllByTestId("saved-pin-row");
    expect(rows).toHaveLength(1);
  });

  test("Saved PIN is formatted correctly", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    const pinContainers = await screen.findAllByTestId("saved-pin-container");
    pinContainers.forEach((container) => {
      expect(container).toHaveTextContent(/[0-9]{4}/);
    });
  });

  test("The new PIN has the name 'Name'", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId("pin-name")).toHaveValue("Name");
  });

  test("A DELETE button is present", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("DELETE")).toBeInTheDocument();
  });

  test("Clicking the delete button will remove the saved PIN from the DOM", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug();

    fireEvent.click(screen.getByText("DELETE"));

    expect(screen.queryByText("saved-pin-row")).toBeNull();
  });
});
