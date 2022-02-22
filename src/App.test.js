import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("General Tests", () => {
  test("React Testing Library works!", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Curso/i)).toBeInTheDocument();
  });

  test("Testing capture by testId", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("test-title")).toBeDefined();
  });
});
