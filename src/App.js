import * as components from "./components";

function App() {
  return (
    <div>
      {/* Review by noor */}
      <components.Header />
      <components.CalculatorForm />
      <components.Table />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
