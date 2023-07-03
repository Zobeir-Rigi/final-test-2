import express from "express";

import apiRouter from "./api";
import traineeRouter from "./routes/traineeRoutes";
import cohortRouter from "./routes/cohortRoutes";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
//Routes//
app.use(`${apiRoot}/trainees`,traineeRouter);
app.use(`${apiRoot}/cohorts`,cohortRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
