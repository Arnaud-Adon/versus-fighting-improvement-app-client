import React from "react";
import { userResponse } from "../../dto/user.dto";
import { logout } from "../../lib/state/actions";
import {
  act,
  mockStore,
  render,
  waitFor,
} from "../../lib/utils/test/test.utils";
import { Status } from "../../lib/utils/types/status";
import Logout from "./Logout";

describe("Logout test suite", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<Logout />);
    expect(getByTestId("logout")).toBeTruthy();
  });

  it("Should display and content logout image", () => {
    const { getByTestId } = render(<Logout />);
    expect(getByTestId("logout-image")).toBeTruthy();
  });

  describe("Store", () => {
    it("Should call logout action", async () => {
      const interceptor = jest.fn();
      const initialState = {
        status: Status.START,
        infos: { ...userResponse.user },
        error: "",
      };
      const store = mockStore(interceptor);
      render(<Logout />, { initialState, store });

      act(() => {
        store.dispatch(logout());
      });

      await waitFor(() => {
        expect(interceptor).toHaveBeenCalledWith(logout());
      });
    });
  });
});
