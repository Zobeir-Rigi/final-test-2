import { Router } from "express";
import { getAllTrainees, createTrainee, getTrainee, searchTrainee, updateTrainee } from "../controllers/traineeController";

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
  .get(getTrainee)
  .put(updateTrainee);

export default router;