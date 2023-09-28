import { act, render, screen, within } from "@testing-library/react";
import MuiSnackbar from "./MuiSnackbar";
import userEvent from "@testing-library/user-event";

describe("MuiSnackbar Tests", () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render snackbar when button is clicked", async () => {
    render(<MuiSnackbar />);

    const button = await screen.findByRole("button", { name: "Show Snackbar" });
    await userEvent.click(button);

    const snackbar = within(await screen.findByRole("alert"));
    expect(snackbar.getByText("Hello there")).toBeInTheDocument();
  });

  it("should auto hide snackbar after 5s", async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<MuiSnackbar />);
    const button = await screen.findByRole("button", { name: "Show Snackbar" });
    await user.click(button);
    expect(await screen.findByRole("alert")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
