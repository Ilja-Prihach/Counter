type Props = {
    count: number;
    maxCount: number
}
export const ProgressBar = ({count, maxCount} : Props) => {
    const progressBar = `${Math.round((count / maxCount) * 100)}%`;
    return (
        <div className="progress-bar">
            <div style={{ width: progressBar }}></div>
        </div>
    )
}