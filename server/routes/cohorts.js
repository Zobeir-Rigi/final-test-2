import { Router } from "express";

import db from "../db";
const router = Router();

// router.get("/cohorts", (req, res)=> {
// 	const q = "SELECT * FROM cohorts";
// 	db.query(q,(err,data)=> {
// 		if(err) {
//              return res.json(err);
//             }
// 		return res.json(data.rows);
// 	});
// });


// router.get("/cohorts", (req, res)=> {
// 	const q = "SELECT * FROM cohorts";
// 	db.query(q)
// 	.then((result) => {
// 		res.status(200).json({ cohorts: result.rows }); // it should be result.rows
// 	})
// 	.catch ((err) => {
// 		return res.status(500).send("there haven't been any cohorts set" , err);
// 	});

// });

router.get("/cohorts", async (req, res) => {
    try {
      const q = "SELECT * FROM cohorts";
      const result = await db.query(q);
      const cohorts = result.rows; // 3 columns
      res.status(200).json({ cohorts });
    } catch (error) {
      console.error("Error retrieving cohorts:", error);
      res.status(500).send("Failed to retrieve cohorts.");
    }
  });

export default router;

