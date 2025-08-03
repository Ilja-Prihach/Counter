type Props = {
    count: number;
    maxCount: number
    errorMessage: string;
    startValue: number;
}

export const Count = ({count, maxCount, startValue, errorMessage} : Props) => {
    const isMaxValueReached =  count === maxCount;
    return (
        <div>
            <div className="count">max value: {maxCount}</div>
            <div className="count">start value: {startValue}</div>
            <div className="count">{count}</div>
            {isMaxValueReached && <p style={{color: "red"}}>Достигнуто максимальное значение!</p>}
        </div>
    )
}