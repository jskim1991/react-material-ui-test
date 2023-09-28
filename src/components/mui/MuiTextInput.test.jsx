import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MuiTextInput from "./MuiTextInput";

describe("TextInput Tests", () => {
  it("test using placeholder text", async () => {
    render(<MuiTextInput />);

    const input = await screen.findByPlaceholderText("Enter name");
    await userEvent.type(input, "Jay");
    expect(input).toHaveValue("Jay");
  });

  it("test using label", async () => {
    render(<MuiTextInput />);

    const input = await screen.findByLabelText("Name");
    await userEvent.type(input, "Jay");
    expect(input).toHaveValue("Jay");
  });

  it("test using test id", async () => {
    render(<MuiTextInput />);

    const input = await screen.findByTestId("name-input");
    await userEvent.type(input, "Jay");
    expect(input).toHaveValue("Jay");
  });
});
