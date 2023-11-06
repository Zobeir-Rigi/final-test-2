import "../pages/Result.css";
import { MilestoneTable } from "../component/MilestoneTable";
import { Milestone } from "../component/Milestone";

export const Result = () => {
	return (
		<div className="result">
			<Milestone />
			<MilestoneTable />
		</div>
	);
};
