import { useState } from "react";
import { Button } from "../component/Button";
import { InputeField } from "../component/InputeField";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateCohort = () => {
	const [formInput, setFormInput] = useState({
		name: "",
		start_date: "",
		m_1: "",
		m_2: "",
		m_3: "",
		m_4: "",
		m_5: "",
		m_6: "",
		m_7: "",
		m_8: "",
	});
	const [updateMessage, setUpdateMessage] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	const updateCohort = async (input) => {
		console.log(input);
		try {
			const response = await fetch(`/api/cohorts/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(input),
			});

			const data = await response.json();
			setUpdateMessage("Congratulations! Cohort successfully updated! ");
			setTimeout(() => {
				navigate(-1);
			}, 4000);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateCohort(formInput);
	};

	return (
		<div className="main">
			<h1>Update Cohort</h1>

			<form style={{ display: "grid" }} onSubmit={handleSubmit}>
				<InputeField
					id={"new-cohort"}
					placeholder={"type new cohort name here"}
					label={"Cohort Name"}
					type={"text"}
					onChange={(event) =>
						setFormInput({ ...formInput, name: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"Start Date"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, start_date: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"HTML-CSS"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_1: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"JS1-Week2"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_2: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"JS2-Week1"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_3: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"JS3-Week3"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_4: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"React-Week2"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_5: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"Node-Week2"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_6: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"DB-Week3"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_7: event.target.value })
					}
				/>
				<InputeField
					id={"new-cohort"}
					label={"FP-Week2"}
					type={"date"}
					onChange={(event) =>
						setFormInput({ ...formInput, m_8: event.target.value })
					}
				/>
				<Button title={"Update"} />
				{updateMessage && (
					<p
						style={{
							textAlign: "center",
							marginTop: "1rem",
							fontSize: "1.5rem",
							fontWeight: "bold",
							color: "#ED4343",
						}}
					>
						{updateMessage}
					</p>
				)}
			</form>
		</div>
	);
};
