import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MuiMemberDropdown from "./MuiMemberDropdown";

describe("MuiMemberDropdown Test", () => {
  it("should display label", async () => {
    render(<MuiMemberDropdown />);

    expect(await screen.findByLabelText("Select Member")).toBeInTheDocument();
  });

  it("should display dropdown", async () => {
    render(<MuiMemberDropdown />);

    expect(
      within(await screen.findByTestId("name-select")).getByRole("button"),
    ).toBeInTheDocument();
  });

  it("should display options", async () => {
    render(<MuiMemberDropdown />);

    const dropdown = within(await screen.findByTestId("name-select")).getByRole(
      "button",
    );
    await userEvent.click(dropdown);
    expect(
      await screen.findByRole("option", { name: "Jay" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Su" })).toBeInTheDocument();
  });

  it("should display selected value", async () => {
    render(<MuiMemberDropdown />);

    const dropdown = within(await screen.findByTestId("name-select")).getByRole(
      "button",
    );
    await userEvent.click(dropdown);
    await userEvent.click(await screen.findByRole("option", { name: "Jay" }));
    expect(screen.getByText("Jay")).toBeInTheDocument();
  });
});
