import React from "react";
import ReactDOM from "react-dom";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
    div.remove();
  });
});
