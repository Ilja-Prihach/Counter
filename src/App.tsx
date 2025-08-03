import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Set}  from "./Set";

function App() {

  //   запихнуть в функци. инитиа валуе, и передать функцию в стейт
  const initialMaxValue = localStorage.getItem("saveMaxValue")
      ? JSON.parse(localStorage.getItem("saveMaxValue")!)
      : 5;
  const initialStartValue = localStorage.getItem("saveStartValue")
      ? JSON.parse(localStorage.getItem("saveStartValue")!)
      : 0;
  const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
  const [startValue, setStartValue] = useState<number>(initialStartValue);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [startValuesInputActive,  setStartValuesInputActive] = useState(false);
  const [maxValueInputActive, setMaxValueInputActive] = useState(false);
  const [counterChanged, setCounterChanged] = useState(false);

  const updateValues = (newMaxValue: number, newStartValue: number) => {
      setMaxValue(newMaxValue);
      setStartValue(newStartValue);
      setMaxValueInputActive(false);
      setStartValuesInputActive(false)
      setCounterChanged(false);
  }

  const resetCounterChanged = () => setCounterChanged(false);

  return (
    <div className="App">
      <Set
          maxValue={maxValue}
          startValue={startValue}
          updateValues={updateValues}
          setError={setErrorMessage}
          setMaxValueInputActive={setMaxValueInputActive}
          setStartValuesInputActive={setStartValuesInputActive}
          counterChanged={counterChanged}
          resetCounterChanged={resetCounterChanged}
      />
      <Counter
          maxValue={maxValue}
          startValue={startValue}
          errorMessage={errorMessage}
          startValuesInputActive={startValuesInputActive}
          maxValueInputActive={maxValueInputActive}
          counterHasChanged={() => setCounterChanged(true)}

      />
    </div>
  )
}

export default App;

