import React, { useState } from "react";
import styles from "../styles/CalculatorForm.module.css";

const CalculatorForm = (props) => {
  const userInputInitialState = {
    currentSaving: "",
    yearlySaving: "",
    expectedInterest: "",
    investmentDuration: "",
  };

  const [userInputs, setUserInputs] = useState({ ...userInputInitialState });
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Handlers
  const calculateHandler = (event) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    event.preventDefault();

    const yearlyData = []; // per-year results

    let currentSavings = +userInputs.currentSaving; // feel free to change the shape of this input object!
    const yearlyContribution = +userInputs.yearlySaving; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInputs.expectedInterest / 100;
    const duration = +userInputs.investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        id: Math.random() * (1000 - 1) + 1,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData);
    // do something with yearlyData ...
    props.calculateInvestmentData(yearlyData);
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.name);
    setUserInputs((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const resetHandler = () => {
    setUserInputs({ ...userInputInitialState });
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="currentSaving"
            value={userInputs.currentSaving}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearlySaving"
            value={userInputs.yearlySaving}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expectedInterest"
            value={userInputs.expectedInterest}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="investmentDuration"
            value={userInputs.investmentDuration}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
