import { useEffect, useState, useContext, useMemo } from "react";
import { AppContext } from "../AppContext";
import { DashboardHero } from "../component/DashboardHero";
import { MilestoneCard } from "../component/MilestoneCard";
import milestoneDetails from "./../../data/milestones.json";
import { mandatoryCourswork } from "../../data/mandatoryCoursework";
import "./dashboard.css";

export const Dashboard = () => {
	const { userName, githubData, codewarsData } = useContext(AppContext);
	const [cohortData, setCohortData] = useState({});
	const [previousMilestoneName, setCurrentMilestoneName] = useState("");
	const [nextMilestoneName, setNextMilestoneName] = useState("");
	const [ShowCard, setShowCard] = useState(false);
	const [ShowBothCard, setShowBothCard] = useState(false);
	// const [ShowNCard, setShowNCard] = useState(false);

	useEffect(() => {
		const fetchCohortData = async () => {
			try {
				const res = await fetch(`/api/trainees/search/${userName}`);
				if (!res.ok) {
					throw new Error("Couldn't fetch cohort's data");
				}
				const data = await res.json();
				setCohortData(data.milestoneData);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchCohortData();
	}, [userName]);

	const filteredPulls = githubData.items?.filter((pull) => {
		const repoName = pull.url
			.replace("https://api.github.com/repos/CodeYourFuture/", "")
			.split("/")[0]
			.toLowerCase();
		return mandatoryCourswork
			.map((item) => item.toLowerCase())
			.includes(repoName);
	});

	const {
		start,
		html_css,
		js1_week2,
		js2_week1,
		js3_week3,
		react_week2,
		node_week2,
		db_week3,
		fp_week2,
	} = cohortData;
	const cohortMilestoneDeadlines = useMemo(
		() => ({
			start,
			html_css,
			js1_week2,
			js2_week1,
			js3_week3,
			react_week2,
			node_week2,
			db_week3,
			fp_week2,
		}),
		[
			start,
			html_css,
			js1_week2,
			js2_week1,
			js3_week3,
			react_week2,
			node_week2,
			db_week3,
			fp_week2,
		]
	);
	const currentDate = new Date().getTime();
	// useEffect(() => {
	// 	const startDate = new Date(cohortData.start).getTime();
	// 	const finishDate = new Date(cohortData["fp_week2"]).getTime();
	// 	if (currentDate < startDate) {
	// 		return setShowCard(true);
	// 	}
	// 	if (currentDate > finishDate) {
	// 		return setShowBothCard(true);
	// 	}

	// }, [ShowCard, cohortData, currentDate]);

	useEffect(() => {
		let indexOfNextMilestone = -1;
		const cohortMilestoneDeadlinesArray = Object.entries(
			cohortMilestoneDeadlines
		);
		indexOfNextMilestone = cohortMilestoneDeadlinesArray.findIndex(
			([, value]) => {
				const timestampForValue = new Date(value).getTime();
				return currentDate <= timestampForValue;
			}
		);
		if (indexOfNextMilestone !== -1 && indexOfNextMilestone !== 0) {
			const [previousMilestoneName] =
				cohortMilestoneDeadlinesArray[indexOfNextMilestone - 1];
			const [nextMilestoneName] =
				cohortMilestoneDeadlinesArray[indexOfNextMilestone];
			setCurrentMilestoneName(previousMilestoneName);
			setNextMilestoneName(nextMilestoneName);
		} if (indexOfNextMilestone === 0){
			return setShowCard(true);
		}

		if (indexOfNextMilestone === -1){
			return setShowBothCard(true);
		}
	}, [cohortMilestoneDeadlines, currentDate]);

	const getData = (value) => {
		let localDate = new Date(cohortMilestoneDeadlines[value]).toLocaleDateString();
		return {
			targetPulls: milestoneDetails[value].pulls,
			targetRank: milestoneDetails[value].codewars,
			name: value,
			deadline: localDate,
			achievedPulls: filteredPulls?.length,
			achievedRank: codewarsData.ranks?.overall.rank * -1,
			achievedScore: codewarsData.ranks?.languages
				?.javascript.score,
		};
	};
	return (
		<div className="dashboard__container main">
			{!!filteredPulls?.length && codewarsData.ranks?.overall.name && <DashboardHero
				achievedPulls={filteredPulls?.length}
				achievedRank={codewarsData.ranks?.overall.rank * -1}
			/>}
			<div className="main-container">
			{previousMilestoneName && <MilestoneCard
				data={getData(previousMilestoneName)} time="Previous" timeVerb="was"
			/>}
			{nextMilestoneName && <MilestoneCard
				data={getData(nextMilestoneName)} display="none" time="Next" timeVerb="is" />}
			{!previousMilestoneName && !nextMilestoneName && ShowCard && (<>
				<MilestoneCard
					data={getData("start")} display="none" time="Next" timeVerb="is" />
			</>)}
			{!previousMilestoneName && !nextMilestoneName && !ShowCard && ShowBothCard && (<>
				<MilestoneCard
					data={getData("fp_week2")} time="Previous" timeVerb="was"
				/><MilestoneCard
					data={getData("post_grad")} display="none" time="Next" timeVerb="is" />
			</>)}

		</div>
		</div>
	);
};