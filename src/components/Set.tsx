import React from 'react';
import { Button } from "./Button";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {
    saveValues,
    setCounterChanged,
    setMaxValue, setStartValue,
    setInputActive,
    validateInputs
} from "../slices/counterSlice";


export const Set = () => {
    const dispatch = useAppDispatch();
    const {
        maxValue,
        startValue,
        errorMessage,
        counterChanged
    } = useAppSelector((state) => state.counter);

    React.useEffect(() => {
        dispatch(validateInputs());
    }, [maxValue, startValue, dispatch]);

    const onClickHandlerSave = () => {
        dispatch(saveValues());
    };

    const conditionsSetDisable =
        maxValue <= startValue ||
        startValue < 0 ||
        counterChanged ||
        errorMessage !== "";

    return (
        <div className="wrapper_set">
            <div className="wrapper_setValue">
                <div>
                    <span>max value</span>
                    <input
                        type="number"
                        value={maxValue}
                        onFocus={() => dispatch(setInputActive(true))}
                        onChange={(e) => {
                            dispatch(setMaxValue(Number(e.target.value)));
                            dispatch(setCounterChanged(false));
                        }}
                        style={{
                            borderColor: errorMessage ? "red" : "#ccc",
                        }}
                    />
                </div>
                <div>
                    <span>start value</span>
                    <input
                        type="number"
                        value={startValue}
                        onFocus={() => dispatch(setInputActive(true))}
                        onChange={(e) => {
                            dispatch(setStartValue(Number(e.target.value)));
                            dispatch(setCounterChanged(false));
                        }}
                        style={{
                            borderColor: errorMessage ? "red" : "#ccc",
                        }}
                    />
                </div>
            </div>
            <div className="wrapper_button">
                <Button
                    title={"set"}
                    onClick={onClickHandlerSave}
                    disabled={conditionsSetDisable}
                />
            </div>
        </div>
    );
};

