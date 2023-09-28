import { render, screen, within } from "@testing-library/react";
import MuiModal from "./MuiModal";
import userEvent from "@testing-library/user-event";

describe("MuiModal Tests", () => {
  it("should render dialog when button is clicked", async () => {
    render(<MuiModal />);

    const button = await screen.findByRole("button", { name: "Show Modal" });
    await userEvent.click(button);

    const modal = within(await screen.findByRole("dialog"));
    expect(modal.getByText("Welcome")).toBeInTheDocument();
    expect(modal.getByText("Hi there")).toBeInTheDocument();
    expect(modal.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("should close modal when close button is clicked", async () => {
    render(<MuiModal />);

    const button = await screen.findByRole("button", { name: "Show Modal" });
    await userEvent.click(button);
    const modal = within(await screen.findByRole("dialog"));
    expect(modal.getByText("Welcome")).toBeInTheDocument();
    expect(modal.getByText("Hi there")).toBeInTheDocument();
    const closeButton = modal.getByRole("button", { name: "Close" });
    await userEvent.click(closeButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
