import { render, screen } from "@testing-library/react";
import MemberDropdown from "./MemberDropdown";
import userEvent from "@testing-library/user-event";

describe("MemberDropdown Test", () => {
  it("should display label", async () => {
    render(<MemberDropdown />);

    expect(await screen.findByLabelText("Select Member")).toBeInTheDocument();
  });

  it("should display dropdown", async () => {
    render(<MemberDropdown />);

    expect(await screen.findByRole("combobox")).toBeInTheDocument();
  });

  it("should display options", async () => {
    render(<MemberDropdown />);

    expect(await screen.findByRole("option", { name: "" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Jay" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Su" })).toBeInTheDocument();
  });

  it("should display selected value", async () => {
    render(<MemberDropdown />);

    const dropdown = await screen.findByRole("combobox");
    expect(dropdown).toHaveValue("");
    await userEvent.selectOptions(dropdown, "Jay");
    expect(dropdown).toHaveValue("1");
  });
});
