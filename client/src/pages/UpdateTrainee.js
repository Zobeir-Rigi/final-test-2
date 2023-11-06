import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import { InputeField } from "../component/InputeField";
import "../pages/addTrainee.css";

export const UpdateTrainee = () => {
	const [fullname, setFullName] = useState("");
	const [githubUserName, setGithubUserName] = useState("");
	const [cohortId, setCohortId] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/trainees/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					github_user_name: githubUserName,
					full_name: fullname,
					cohort_id: cohortId,
				}),
			});

			if (!response.ok) {
				throw new Error("couldn't to update trainee");
			}

			navigate(-1);
		} catch (error) {
			console.error("Error updating trainee:", error);
		}
	};

	return (
		<div className="addTrainee main">
			<h1>Update Trainee's details</h1>
			<form onSubmit={handleSubmit}>
				<InputeField
					placeholder={"Github User Name"}
					label={"Github User Name"}
					type={"text"}
					value={githubUserName}
					onChange={(e) => setGithubUserName(e.target.value)}
				/>
				<InputeField
					placeholder={"Full Name "}
					label={"Full Name "}
					type={"text"}
					value={fullname}
					onChange={(e) => setFullName(e.target.value)}
				/>

				<InputeField
					placeholder={"cohort Id "}
					label={"cohort Id"}
					type={"number"}
					value={cohortId}
					onChange={(e) => setCohortId(e.target.value)}
				/>
				<Button title={"Update"} />
			</form>
		</div>
	);
};
