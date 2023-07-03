import { Router } from "express";
import { getAllCohorts, createCohort, getCohort } from "../controllers/cohortController";

const router = Router();

router
  .route("/")
  .get(getAllCohorts)
  .post(createCohort);

router
  .route("/:id")
  .get(getCohort);

export default router;