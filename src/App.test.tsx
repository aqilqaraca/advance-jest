import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Salam", () => {
  render(<App />);
  const linkElement = screen.getByText(/Salam/i);
  const t = screen.getByText(/HI/);
  expect(linkElement).toBeInTheDocument();
  expect(t).toBeInTheDocument();
});

describe("getByTesting", () => {
  test("role", () => {
    render(<App />);
    const button = screen.getByRole("button", {
      name: "Test button",
    });
    const linkTag = screen.getByRole("test_role");
    const testByValue = screen.getByDisplayValue("test_value");
    const byTestId = screen.getByTestId("custom_testid");
    const allButton = screen.getAllByRole("button");
    const test2Text = screen.getByText((c) => c.startsWith("Test2"));
    expect(button).toBeInTheDocument();
    expect(testByValue).toBeInTheDocument();
    expect(linkTag).toBeInTheDocument();
    expect(byTestId).toBeInTheDocument();
    expect(allButton.length).toBe(3);
    expect(test2Text).toBeInTheDocument();
  });
});
