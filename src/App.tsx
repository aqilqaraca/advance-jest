const App = () => {
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
    </div>
  );
};

export default App;
