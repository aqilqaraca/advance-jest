import React, { FC } from "react";
import ReactDom from "react-dom";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {
  React.useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? setOpen(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  function bodyClickHandler(e: MouseEvent) {
    if (e.target instanceof HTMLBodyElement) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.body.addEventListener("click", bodyClickHandler);
    return () => {
      document.body.removeEventListener("click", bodyClickHandler);
    };
  }, []);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="modal">
        <button data-testid="close-modal" onClick={() => setOpen(false)}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
