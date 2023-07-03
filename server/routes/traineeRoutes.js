import { Router } from "express";
import { getAllTrainees, createTrainee, getTrainee, searchTrainee } from "../controllers/traineeController";

const router = Router();

router
  .route("/")
  .get(getAllTrainees)
  .post(createTrainee);

router
  .route("/search/:userName")
  .get(searchTrainee);

router
  .route("/:id")
  .get(getTrainee);

export default router;