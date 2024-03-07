import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  /* validate to have year value positive */
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        /* 
          this plus forces string to number value 
          bcos event.target.value always returns string
        */
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>

      <UserInput
        onChange={handleChange}
        userInput={userInput}
      ></UserInput>

      {!inputIsValid && <p className="center">Please enter a duration greater than zero!</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
