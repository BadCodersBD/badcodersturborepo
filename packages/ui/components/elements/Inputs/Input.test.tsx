import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("akij-foods-button test", () => {
  it("sees akij-foods-button", () => {
    render(<Input />);
    expect(screen.getByPlaceholderText("akij-input")).toBeInTheDocument();
  });
});
