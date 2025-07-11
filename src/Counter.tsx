import {useRef, useState} from "react";
import {Button} from "./Button";
import {ProgressBar} from "./ProgressBar";
import {Count}  from "./Count";



export const Counter = () => {

    const startCount = 0;
    // const  maxCount= 5;
    const [count, setCount] = useState(startCount);
    const maxCount = useRef(10);
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }


    const inc = () => {
        if (count < maxCount.current) {
            setCount(count + 1)
        }
    };

    const reset = () => {
            setCount(startCount);
            maxCount.current = generateRandomNumber();
    };


    // const isMaxValueReached =  count === maxCount;

    return (

        <div className="counter">


            <Count count={count} maxCount={maxCount.current}/>
            <ProgressBar count={count} maxCount={maxCount.current}/>

            <div className="wrapper_button">
                <Button title={" inc "} onClick={() => inc()} disabled={count >= maxCount.current}/>
                <Button title={" reset "} onClick={() => reset()} disabled={count === 0}/>
            </div>
        </div>
    );
};