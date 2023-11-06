import db from "../db";

export const getAllTrainees = (req, res) => {
	res.status(200).json("hello from trainees route");
};

export const getTrainee = async (req, res) => {
	const { id } = req.params;

	try {
		const q = "SELECT * FROM trainees WHERE id = $1";
		const result = await db.query(q, [id]);
		const trainee = result.rows[0];

		if (!trainee) {
			return res.status(404).json({ error: "Trainee is not found" });
		}

		res.status(200).json({ trainee });
	} catch (error) {
		console.error("Error retrieving trainee:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};

export const searchTrainee = async (req, res) => {
	const { userName } = req.params;
	try {
		const q =
			`SELECT  T.gitHub_user_name,
			C.start_date AS start,
			C.m_1 AS HTML_CSS,
			C.m_2 AS JS1_Week2,
			C.m_3 AS JS2_Week1,
			C.m_4 AS JS3_Week3,
			C.m_5 AS React_Week2,
			C.m_6 AS Node_Week2,
			C.m_7 AS DB_Week3,
			C.m_8 AS FP_Week2
	  FROM cohorts C
	  JOIN trainees T ON C.id = T.cohort_id
	  WHERE T.gitHub_user_name = $1;
		`;
		const result = await db.query(q, [userName]);
		const milestoneData = result.rows[0];

		if (!milestoneData) {
			return res.status(404).json({ error: "Trainee is not found" });
		}

		res.status(200).json({ milestoneData });
	} catch (error) {
		console.error("Error retrieving trainee:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};

export const createTrainee = async (req, res) => {
    try {
        const { full_name, github_user_name, cohort_id } = req.body;
        if (!github_user_name) {
          return res.status(400).json({ error: "Please fill out all required fields." });
        }
        const q = "INSERT INTO trainees (github_user_name, full_name, cohort_id) VALUES ($1, $2, $3)";
        const result = await db.query(q, [github_user_name, full_name, cohort_id]);
        if (result.rowCount === 1) {
          res.status(201).json({ "New trainee created successfully": req.body });
        } else {
          throw new Error("Failed to create new trainee.");
        }
      } catch (error) {
        console.error("Error creating trainee:", error);
        return res.status(500).send("Failed to create new trainee. Please ensure all required fields are provided in the correct format.");
      }
};


export const updateTrainee = async (req, res) => {
	const { id } = req.params;
	const { full_name, cohort_id, github_user_name } = req.body;
	try {
		const q =
			"UPDATE trainees SET github_user_name= $1, full_name = $2, cohort_id = $3 WHERE id = $4";
		await db.query(q, [github_user_name, full_name, cohort_id, id ]);
		res.status(200).json({ message: "Trainee details updated successfully" });
	} catch (error) {
		console.error("Error updating trainee details:", error);
		res.status(500).send("Failed, Internal Server Error");
	}
};
