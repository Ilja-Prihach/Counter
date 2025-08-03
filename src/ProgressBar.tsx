type Props = {
    maxValue: number;
    startValue: number;
}
export const ProgressBar = ({startValue, maxValue} : Props) => {
    const progressBar = `${Math.round((startValue / maxValue) * 100)}%`;
    return (
        <div className="progress-bar">
            <div style={{ width: progressBar }}></div>
        </div>
    )
}