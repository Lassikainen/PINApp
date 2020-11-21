import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Renders starting components correctly", () => {
  test("renders Header", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Generate")).toBeInTheDocument();
    expect(screen.getByText("Saved")).toBeInTheDocument();
  });
});

describe("Changes selected div when changing page", () => {
  test("Generate header div is selected and Save is deselected on page load", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Generate")).toHaveClass("selected");
    expect(screen.getByText("Saved")).toHaveClass("deselected");
  });

  test("Clicking the Saved div will select the Saved div and deselect the Generate div", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("Saved"));

    expect(screen.getByText("Generate")).toHaveClass("deselected");
    expect(screen.getByText("Saved")).toHaveClass("selected");
  });

  test("Clicking the Generate div when Saved is selected will select the Generate div", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();

    fireEvent.click(screen.getByText("Saved"));
    fireEvent.click(screen.getByText("Generate"));

    expect(screen.getByText("Generate")).toHaveClass("selected");
    expect(screen.getByText("Saved")).toHaveClass("deselected");
  });
});
