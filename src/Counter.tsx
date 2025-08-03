import {useEffect, useState} from "react";
import {Button} from "./Button";
// import {ProgressBar} from "./ProgressBar";
// import {Count}  from "./Count";

type Props = {
    maxValue: number;
    startValue: number;
    errorMessage:  string;
    maxValueInputActive: boolean;
    startValuesInputActive:  boolean;
    counterHasChanged: () => void;
}

export const Counter = ({
    maxValue,
    startValue,
    errorMessage,
    maxValueInputActive,
    startValuesInputActive,
    counterHasChanged
} : Props) => {


    const [count, setCount] = useState(startValue);

    useEffect(() => {
        setCount(startValue);
    }, [startValue]);


    const inc = () => {
        if (count < maxValue) {
            setCount(count + 1)
            counterHasChanged()
        }
    };

    const reset = () => {
            setCount(startValue);
    };

    const isMaxValueReached =  count === maxValue;

    const conditionsIncDisabled = maxValueInputActive || startValuesInputActive || count >= maxValue
    const conditionsResetDisabled =   maxValueInputActive || startValuesInputActive || count === startValue
    return (
        <div className="wrapper_set">
            <div className="wrapper_setValue">
                {errorMessage ? (
                    <div className="error">
                        {errorMessage}
                    </div>
                ) : startValuesInputActive || maxValueInputActive ? (
                    <div>Enter values and press 'set'</div>
                ) : isMaxValueReached ? (
                    <p style={{color: "red"}}>Maximum value reached!</p>
                ) : (
                    <div className="count">{count}</div>
                )}
            </div>

            <div className="wrapper_button">
                <Button title={" inc "} onClick={inc} disabled={conditionsIncDisabled}/>
                <Button title={" reset "} onClick={reset} disabled={conditionsResetDisabled}/>
            </div>
        </div>
    );
};
