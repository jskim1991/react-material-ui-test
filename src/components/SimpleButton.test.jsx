import { render, screen, waitFor } from "@testing-library/react";
import SimpleButton from "./SimpleButton";
import userEvent from "@testing-library/user-event";

describe("SimpleButton Tests", () => {
  it("should display button with text", async () => {
    render(<SimpleButton />);

    expect(
      await screen.findByRole("button", { name: "Click Here" }),
    ).toBeInTheDocument();
  });

  it("should execute click handler function when button is clicked", async () => {
    const mockOnClickHandler = jest.fn();
    render(<SimpleButton onClick={mockOnClickHandler} />);

    const button = await screen.findByRole("button", { name: "Click Here" });
    await userEvent.click(button);
    await waitFor(() => {
      expect(mockOnClickHandler).toHaveBeenCalled();
    });
    // a better test is to assert something happens on screen after the button click
  });
});
