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

export const getCohort = (req, res) => {
    res.status(200).json("you can write your get function to get one cohort here");
};

export const createCohort = (req, res) => {
    res.status(200).json("you can write your post function to create new cohort here");
};