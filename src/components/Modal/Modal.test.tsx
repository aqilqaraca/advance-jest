import { render, screen } from "@testing-library/react";
import Modal from ".";
import userEvent from "@testing-library/user-event";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (element: React.ReactNode) => element,
}));

describe("Modal", () => {
  const props = {
    open: true,
    setOpen: jest.fn(),
    children: <h1>Modal</h1>,
  };

  test("should render modal", () => {
    render(<Modal {...props} />);
    const closeButton = screen.getByTestId("close-modal");
    expect(closeButton).toBeInTheDocument();
  });

  test("should clear modal on body", async () => {
    userEvent.setup();
    render(<Modal {...props} />);
    const closeButton = screen.getByTestId("close-modal");
    await userEvent.click(closeButton);
    expect(closeButton).toBeInTheDocument();
    expect(props.setOpen).toHaveBeenCalled();
    expect(props.open).toBe(false);
  });
});
