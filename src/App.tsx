import { useEffect, useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2000);
  }, []);
  const [counter, setCounter] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <h1>Salam</h1>
      <p>HI</p>
      <button>Test button</button>
      <button>Test2</button>
      <section>
        <a href="/">Go To second section</a>
        <a
          role="test_role"
          href="/"
          aria-label="test link"
          aria-selected="true"
        >
          Go To second section
        </a>
      </section>
      <input value="test_value" onChange={() => {}} />
      <button data-testid="custom_testid">test id</button>
      {state && <button>Test find</button>}

      <p role="counterText">{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <Modal open={openModal} setOpen={setOpenModal}>
        <h1>Modal</h1>
      </Modal>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
    </div>
  );
};

export default App;
