import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
    maxValue: number;
    startValue: number;
    count: number;
    errorMessage: string;
    inputActive: boolean;
    counterChanged: boolean;
}

const getInitialMaxValue = (): number => {
    const saved = localStorage.getItem("saveMaxValue");
    return saved ? JSON.parse(saved) : 5;
};

const getInitialStartValue = (): number => {
    const saved = localStorage.getItem("saveStartValue");
    return saved ? JSON.parse(saved) : 0;
};

const initialState: CounterState = {
    maxValue: getInitialMaxValue(),
    startValue: getInitialStartValue(),
    count: getInitialStartValue(),
    errorMessage: '',
    inputActive: false,
    counterChanged: false,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setMaxValue: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload;
            state.inputActive = true;
            state.counterChanged = false;
        },
        setStartValue: (state, action: PayloadAction<number>) => {
            state.startValue = action.payload;
            state.inputActive = true;
            state.counterChanged = false;
        },
        setInputActive: (state, action: PayloadAction<boolean>) => {
            state.inputActive = action.payload;
        },
        setCounterChanged: (state, action: PayloadAction<boolean>) => {
            state.counterChanged = action.payload;
        },
        increment: (state) => {
            if (state.count < state.maxValue) {
                state.count += 1;
                state.counterChanged = true;
            }
        },
        reset: (state) => {
            state.count = state.startValue;
        },
        saveValues: (state) => {
            localStorage.setItem("saveMaxValue", JSON.stringify(state.maxValue));
            localStorage.setItem("saveStartValue", JSON.stringify(state.startValue));
            state.inputActive = false;
            state.count = state.startValue;
            state.counterChanged = false;
        },
        validateInputs: (state) => {
            if (state.startValue >= state.maxValue || state.startValue < 0) {
                state.errorMessage = "Incorrect value";
            } else {
                state.errorMessage = "";
            }
        },
    },
});

export const {
    setMaxValue,
    setStartValue,
    setInputActive,
    setCounterChanged,
    increment,
    reset,
    saveValues,
    validateInputs,
} = counterSlice.actions;

