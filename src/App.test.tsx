import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Salam", () => {
  render(<App />);
  const linkElement = screen.getByText(/Salam/i);
  const t = screen.getByText(/HI/);
  expect(linkElement).toBeInTheDocument();
  expect(t).toBeInTheDocument();
});
