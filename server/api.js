import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";
const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});
/*************************** my codes */
router.get("/cohort", (req, res)=> {
	const q = "SELECT * FROM cohort"
	db.query(q,(err,data)=> {
		if(err) return res.json(err)
		return res.json(data)
	})
})
export default router;
