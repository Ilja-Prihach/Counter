type Props = {
    count: number;
    maxCount: number
}

export const Count = ({count, maxCount} : Props) => {
    const isMaxValueReached =  count === maxCount;
    return (
        <div>
            <div className="count">Максимальное значение: {maxCount}</div>
            <div className="count">{count}</div>
            {isMaxValueReached && <p style={{color: "red"}}>Достигнуто максимальное значение!</p>}
        </div>
    )
}