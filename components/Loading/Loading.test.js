import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Loading from "./Loading";

describe("Loading test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("loading")).toBeTruthy();
  });
  it("Should display image", async () => {
    const { getByTestId } = render(<Loading />);
    const container = getByTestId("loading");
    const image = getByTestId("loading-image");
    expect(container).toContainElement(image);
  });
});
