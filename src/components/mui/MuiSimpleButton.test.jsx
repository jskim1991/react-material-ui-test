import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MuiSimpleButton from "./MuiSimpleButton";

describe("MuiSimpleButton Tests", () => {
  it("should display button with text", async () => {
    render(<MuiSimpleButton />);

    expect(
      await screen.findByRole("button", { name: "Click Here" }),
    ).toBeInTheDocument();
  });

  it("should execute click handler function when button is clicked", async () => {
    const mockOnClickHandler = jest.fn();
    render(<MuiSimpleButton onClick={mockOnClickHandler} />);

    const button = await screen.findByRole("button", { name: "Click Here" });
    await userEvent.click(button);
    await waitFor(() => {
      expect(mockOnClickHandler).toHaveBeenCalled();
    });
    // a better test is to assert something happens on screen after the button click
  });
});
