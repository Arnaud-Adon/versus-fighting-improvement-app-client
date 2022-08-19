import React from "react";
import { render } from "@testing-library/react-native";
import UserInfo from "./UserInfo";

describe("UserInfo test suite", () => {
  const mockUser = {
    username: "mock-username",
    path: "mock-path-image",
  };
  it("Should render correctly", () => {
    const { getByTestId } = render(<UserInfo user={mockUser} />);
    expect(getByTestId("user-info")).toBeTruthy();
  });

  it("Should display user image", () => {
    const { getByTestId } = render(<UserInfo user={mockUser} />);
    expect(getByTestId("user-image")).toBeTruthy();
  });
  it("Should display username", () => {
    const { getByTestId, getByText } = render(<UserInfo user={mockUser} />);
    expect(getByTestId("user-username")).toBeTruthy();
    expect(getByText(mockUser.username)).toBeTruthy();
  });

  it("Should display username first letter when user.path missing ", () => {
    const mockUserWithoutPath = {
      username: "mock-username",
      path: "",
    };
    const { getByTestId } = render(<UserInfo user={mockUserWithoutPath} />);
    expect(getByTestId("no-image")).toBeTruthy();
  });
});
