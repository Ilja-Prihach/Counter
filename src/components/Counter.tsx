import React from 'react';
import { Button } from "./Button";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {increment, reset} from "../slices/counterSlice";


export const Counter = () => {
    const dispatch = useAppDispatch();
    const {
        count,
        maxValue,
        startValue,
        errorMessage,
        inputActive,
    } = useAppSelector((state) => state.counter);

    const inc = () => {
        dispatch(increment());
    };

    const resetHandler = () => {
        dispatch(reset());
    };

    const isMaxValueReached = count === maxValue;

    const conditionsIncDisabled =
        inputActive ||
        count >= maxValue ||
        errorMessage !== "";

    const conditionsResetDisabled =
        inputActive ||
        count === startValue ||
        errorMessage !== "";

    return (
        <div className="wrapper_set">
            <div className="wrapper_setValue">
                {errorMessage ? (
                    <div className="error">
                        {errorMessage}
                    </div>
                ) : inputActive ? (
                    <div>Enter values and press 'set'</div>
                ) : isMaxValueReached ? (
                    <p style={{color: "red"}}>Maximum value reached!</p>
                ) : (
                    <div className="count">{count}</div>
                )}
            </div>

            <div className="wrapper_button">
                <Button
                    title={" inc "}
                    onClick={inc}
                    disabled={conditionsIncDisabled}
                />
                <Button
                    title={" reset "}
                    onClick={resetHandler}
                    disabled={conditionsResetDisabled}
                />
            </div>
        </div>
    );
};


