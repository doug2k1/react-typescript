import React from "react";
import { render } from "react-testing-library";
import App from "./App";

describe("App", () => {
  it("renders", () => {
    const wrapper = render(<App lang="TS with Jest" />);

    expect(wrapper.container).toHaveTextContent("App component");
  });
});
