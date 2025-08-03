import {Button} from "./Button";
import {useEffect, useState} from "react";

type SetProps = {
    maxValue: number;
    startValue: number;
    updateValues: (newMaxValue: number, newStartValue: number) => void;
    setError: (message: string) => void;
    setMaxValueInputActive: (active: boolean) => void;
    setStartValuesInputActive:  (active: boolean) => void;
    counterChanged: boolean;
    resetCounterChanged: () => void
}

export const Set = ({
    maxValue,
    startValue,
    updateValues,
    setError,
    setMaxValueInputActive,
    setStartValuesInputActive,
    counterChanged,
    resetCounterChanged
} : SetProps) => {
    const [localMaxValue, setLocalMaxValue] = useState(maxValue);
    const [localStartValue, setLocalStartValue] = useState(startValue);
    const [startValid, setStartValid] = useState(true);
    const [maxValid, setMaxValid] = useState(true);

    useEffect(() => {
        validateInputs();
    }, [localMaxValue, localStartValue]);


    const validateInputs = () => {
        const newMaxValue = localMaxValue;
        const newStartValue = localStartValue;


        if (newStartValue >= newMaxValue || newStartValue < 0 ) {
            setError("Incorrect value");
            setMaxValid(false);
            setStartValid(false);
        } else {
            setError("");
            setMaxValid(true);
            setStartValid(true);
        }
    };

    const onClickHandlerSave = () => {
        const newMaxValue = localMaxValue;
        const newStartValue = localStartValue;

        updateValues(newMaxValue, newStartValue);
        setMaxValueInputActive(false);
        setStartValuesInputActive(false);

        localStorage.setItem("saveMaxValue", JSON.stringify(newMaxValue));
        localStorage.setItem("saveStartValue", JSON.stringify(newStartValue));
    }

    const conditionsSetDisable = localMaxValue <= localStartValue || localStartValue < 0 || counterChanged

    return (
        <div className="wrapper_set">
            <div className="wrapper_setValue">
                <div>
                    <span>max value</span>
                    <input
                        type="number"
                        value={localMaxValue}
                        onFocus = {() => setMaxValueInputActive(true)}
                        onChange={(e) => {
                            setLocalMaxValue(+e.target.value)
                            validateInputs();
                            resetCounterChanged()
                        }}
                        style={{
                            borderColor: maxValid ? "#ccc" : "red",
                        }}
                    />
                </div>
                <div>
                    <span>start value</span>
                    <input
                        type="number"
                        value={localStartValue}
                        onFocus = {() => setStartValuesInputActive(true)}
                        onChange={(e) => {
                            setLocalStartValue(+e.target.value)
                            validateInputs();
                            resetCounterChanged()
                        }}
                        style={{
                            borderColor: startValid ? "#ccc" : "red",
                        }}
                    />
                </div>
            </div>
            <div className="wrapper_button">
                <Button title={"set"} onClick={onClickHandlerSave}
                        disabled={conditionsSetDisable}
                />
            </div>
        </div>

    )
}
