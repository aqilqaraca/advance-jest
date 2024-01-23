import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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
    const test2Text = screen.getByText((c) => c.startsWith("Test2"));
    expect(button).toBeInTheDocument();
    expect(testByValue).toBeInTheDocument();
    expect(linkTag).toBeInTheDocument();
    expect(byTestId).toBeInTheDocument();
    expect(test2Text).toBeInTheDocument();
  });

  test("test findBy", () => {
    render(<App />);
    const t = screen.queryByRole("button", { name: "Test find" });
    expect(t).not.toBeInTheDocument();
  });

  // test("test find all", () => {
  //   render(<App />);
  //   const t = screen.getByRole("button", { name: "Test find" });
  //   expect(t).toBeInTheDocument();
  // });

  test("test findByMethod", async () => {
    render(<App />);
    const t = await screen.findByRole(
      "button",
      { name: "Test find" },
      { timeout: 3000 }
    );
    expect(t).toBeInTheDocument();
  });

  test("test counterText", () => {
    render(<App />);
    const text = screen.getByRole("counterText");
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("0");
  });

  test("t", async () => {
    userEvent.setup();
    render(<App />);
    const text = screen.getByRole("counterText");
    const button = screen.getByRole("button", { name: "Counter" });
    await userEvent.click(button);
    expect(text).toHaveTextContent("1");
  });
});
