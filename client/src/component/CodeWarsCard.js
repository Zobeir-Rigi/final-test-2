export const CodeWarsCard = ({
	rank,
	requiredRank,
	currentMilestone,
	nextMilestone,
	remainingDays,
	nextMilestoneRank,
	jsScore,
	percentCompleteCodeWars,
}) => {
	return (
		<div className="pr_card">
			<h2>CodeWars</h2>
			<p>Your rank: {rank}</p>
			<p>Milestone: {currentMilestone}</p>
			<p>Required rank: {requiredRank}</p>
			<p>You are at Milestone</p>
			<p>Next Milestone: {nextMilestone}</p>
			<p>Remaining days: {remainingDays}</p>
			<p>
				Required rank for next milestone: {nextMilestoneRank}
			</p>
			<p>
				You need {jsScore} more JS score in total
			</p>
			<p>
				You have created {percentCompleteCodeWars}% of the katas required to reach the next milestone
			</p>
		</div>
	);
};
