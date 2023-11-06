import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import { CohortsTable } from "../component/CohortsTable";

export const Cohorts = () => {
	const [cohortsData, setCohortsData] = useState([]);

	useEffect(() => {
		const fetchAllCohorts = async () => {

			try {
				const response = await fetch("/api/cohorts");
				const data = await response.json();
				if (response.status === 200) {
					setCohortsData(data.cohorts);
				} else {
					throw new Error("Failed to fetch cohorts");
				}
			} catch (error) {
				console.error("Error fetching cohorts:", error);
			}
		};
		fetchAllCohorts();
	}, []);

	return (
		<div className="main">
			<h1>List of Cohorts</h1>
			<CohortsTable cohortsData={cohortsData} />
			<Link to="/admin/cohorts/addcohort">
				<Button title="Add New Cohort" />
			</Link>
		</div>
	);
};
