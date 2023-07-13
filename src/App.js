import { useState } from "react";
import * as components from "./components";

const DUMMY_DATA = [];

function App() {
  const [investmentData, setInvestmentData] = useState(DUMMY_DATA);

  const onCalculateInvestmentData = (data) => {
    setInvestmentData((prevState) => {
      return [...prevState, ...data];
    });
  };

  return (
    <div>
      {/* Review by noor */}
      <components.Header />
      <components.CalculatorForm
        calculateInvestmentData={onCalculateInvestmentData}
      />
      <components.Table results={investmentData} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
