import "./milestoneCard.css";
import { CircleChart } from "./CircleChart";
export const MilestoneCard = ({
    time,
    timeVerb,
    data,
    display,
}) => {
    const getCodewarsScore = (value) => {
        let score = value === 8 ? 0 : value === 7 ? 20 : value === 6 ? 76 : value === 5 ? 229 : value === 4 ? 643 : 0;
        return score;
    };
    const checkMilestone = (target, achieved) => (achieved < target ? "Behind" : achieved === target ? "At" : achieved > target ? "Beyond" : "");
    return (
        <div className="milestone__card-container">
            <div className="milestone__title-container">
                <p className="milestone-title">
                    <span>{time} Milestone</span>
                    <span>{data.name.toUpperCase()}</span>
                </p>
                <p className="deadline-prgph">
                    Deadline {timeVerb} {data.deadline !=="Invalid Date" ? data.deadline :"find a job"}
                </p>
            </div>
            <div className="milestone__card-subcontainer">
                <div className="factor-container">
                    <p className="factor-title">PRs</p>
                    <p className="card-prgph" >
                        <span>Target:</span>
                        <span className="card-prgph-number">{data.targetPulls}</span>
                    </p>
                    <p className="card-prgph">
                        <span>Achieved:</span>
                        <span className="card-prgph-number">{data.achievedPulls}</span>
                    </p>
                    <CircleChart targetScore={data.targetPulls} achievedscore={data.achievedPulls} />
                    <p style={{ display: display }}>{checkMilestone(data.targetPulls, data.achievedPulls)} Milestone</p>
                </div>
                <div className="factor-container">
                    <p className="factor-title">Codewars</p>
                    <p className="card-prgph">
                        <span>Target:</span>
                        <span className="card-prgph-number">{data.targetRank} <span className="kyu">Kyu</span></span>
                    </p>
                    <p className="card-prgph">
                        <span>Achieved:</span>
                        <span className="card-prgph-number">{data.achievedRank} <span className="kyu">Kyu</span></span>
                    </p>
                    <CircleChart targetScore={getCodewarsScore(data.targetRank)} achievedscore={data.achievedScore} />
                    <p style={{ display: display }}>{checkMilestone(getCodewarsScore(data.targetRank), data.achievedScore)} Milestone</p>
                </div>
            </div>
        </div>
    );
};