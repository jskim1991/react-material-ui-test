import { render, screen, waitFor } from "@testing-library/react";
import MuiTable from "./MuiTable";
import * as membersApi from "../membersApi";
import userEvent from "@testing-library/user-event";

jest.mock("../membersApi");

describe("MuiTable Tests", () => {
  it("should display pagination control", async () => {
    membersApi.fetchFromBackend.mockResolvedValue({
      totalElements: 0,
      content: [],
    });

    render(<MuiTable />);

    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  it("should load next 3 and previous 3 members", async () => {
    membersApi.fetchFromBackend.mockResolvedValue({
      totalElements: 10,
      content: [],
    });

    render(<MuiTable />);
    await waitFor(() => {
      expect(membersApi.fetchFromBackend).toHaveBeenNthCalledWith(1, 0, 3);
    });

    const secondPage = await screen.findByRole("button", {
      name: "Go to page 2",
    });
    await userEvent.click(secondPage);
    await waitFor(() => {
      expect(membersApi.fetchFromBackend).toHaveBeenNthCalledWith(2, 1, 3);
    });

    const firstPage = await screen.findByRole("button", {
      name: "Go to page 1",
    });
    await userEvent.click(firstPage);
    await waitFor(() => {
      expect(membersApi.fetchFromBackend).toHaveBeenNthCalledWith(3, 0, 3);
    });
  });
});
