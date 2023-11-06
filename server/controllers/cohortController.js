import db from "../db";
export const getAllCohorts = async (req, res) => {
	try {
		const q = "SELECT * FROM cohorts";
		const result = await db.query(q);
		const cohorts = result.rows;
		res.status(200).json({ cohorts });
	} catch (error) {
		console.error("Error retrieving cohorts:", error);
		res.status(500).send("Failed, Internal Server Error.");
	}
};

export const getCohort = async (req, res) => {
	try {
		const { id } = req.params;
		const traineesQuery =
			"SELECT * FROM trainees WHERE cohort_id = $1 ORDER BY trainees Asc";
		const milestonesQuery =
			" SELECT * FROM cohorts WHERE id = $1 ORDER BY cohorts Asc";
		const traineesResult = await db.query(traineesQuery, [id]);
		const milestonesResult = await db.query(milestonesQuery, [id]);
		const trainees = traineesResult.rows;
		const milestones = milestonesResult.rows[0];
		if (milestones) {
			console.log(`Cohort found: Milestone name is ${milestones.name}`);
			res
				.status(200)
				.json({ "All Trainees": trainees, Milestones: milestones });
		} else {
			console.error("Cohort not found.");
			res.status(404).json({ error: "Cohort not found." });
		}
	} catch (error) {
		console.error("Error retrieving cohort:", error);
		res.status(500).send("Failed to retrieve cohort.");
	}
};

export const createCohort = async (req, res) => {
	try {
		const { name, start_date, m_1, m_2, m_3, m_4, m_5, m_6, m_7, m_8 } =
			req.body;
		if (
			!name ||
			!start_date ||
			!m_1 ||
			!m_2 ||
			!m_3 ||
			!m_4 ||
			!m_5 ||
			!m_6 ||
			!m_7 ||
			!m_8
		) {
			//not sure product manager has to know all dates in advance
			return res
				.status(400)
				.json({ error: "Please fill out all required fields." });
		}
		const q =
			"INSERT INTO cohorts (name, start_date, m_1, m_2, m_3, m_4, m_5, m_6, m_7, m_8) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
		const result = await db.query(q, [
			name,
			start_date,
			m_1,
			m_2,
			m_3,
			m_4,
			m_5,
			m_6,
			m_7,
			m_8,
		]);
		if (result.rowCount === 1) {
			res.status(201).json({ "New cohort created successfully": req.body });
		} else {
			throw new Error("Failed to create new cohort.");
		}
	} catch (error) {
		console.error("Error creating cohort:", error);
		return res
			.status(500)
			.send(
				"Failed to create new cohort. Please ensure all required fields are provided in the correct format."
			);
	}
};

export const updateCohort = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, start_date, m_1, m_2, m_3, m_4, m_5, m_6, m_7, m_8 } =
			req.body;
		const q = `
      UPDATE cohorts
      SET name = $1, start_date = $2, m_1 = $3, m_2 = $4, m_3 = $5, m_4 = $6, m_5 = $7, m_6 = $8, m_7 = $9, m_8 = $10
      WHERE id = $11
    `;
		const result = await db.query(q, [
			name,
			start_date,
			m_1,
			m_2,
			m_3,
			m_4,
			m_5,
			m_6,
			m_7,
			m_8,
			id,
		]);
		if (result.rowCount === 1) {
			res.status(200).json({ message: "Cohort updated successfully" });
		} else {
			throw new Error("Failed to update cohort. Cohort not found.");
		}
	} catch (error) {
		console.error("Error updating cohort:", error);
		return res.status(500).send("Failed to update cohort.");
	}
};
