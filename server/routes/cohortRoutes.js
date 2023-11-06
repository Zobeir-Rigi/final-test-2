import { Router } from "express";
import { getAllCohorts, createCohort, updateCohort, getCohort } from "../controllers/cohortController";

const router = Router();

router
  .route("/")
  .get(getAllCohorts)
  .post(createCohort);

router
  .route("/:id")
  .get(getCohort)
  .put(updateCohort);

export default router;