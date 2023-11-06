import React, { useEffect, useState } from "react";

export const Milestone = () => {
	const [module] = useState({
		name: "Final Project",
		deadline: new Date("2023-07-08"),
	});
	const [remainingDays, setRemainingDays] = useState(0);

	useEffect(() => {
		const currentDate = new Date();
		const timeDiff = module.deadline.getTime() - currentDate.getTime();
		const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		setRemainingDays(daysRemaining);
	}, [module.deadline]);

	return (
		<div>
			<h2>Module Information</h2>
			<p id="module-name">Module Name: {module.name}</p>
			<p id="deadline">Deadline: {module.deadline.toDateString()}</p>
			<p id="remaining-days">
				Remaining Days: {remainingDays} days to deadline
			</p>
		</div>
	);
};
