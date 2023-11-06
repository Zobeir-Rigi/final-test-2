import { Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useState } from "react";
import "./App.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { CohortForm } from "./component/CohortForm";
import { Cohorts } from "./pages/Cohorts";
import { AddTrainee } from "./pages/AddTrainee";
import { UpdateTrainee } from "./pages/UpdateTrainee";
import { Cohort } from "./pages/Cohort";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

import { UpdateCohort } from "./pages/UpdateCohort";

const App = () => {
	const [userName, setUserName] = useState("");
	const [codewarsData, setCodewarsData] = useState([]);
	const [githubData, setGitHubData] = useState([]);

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				codewarsData,
				setCodewarsData,
				githubData,
				setGitHubData,
			}}
		>
			<div className="body-container">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/result" element={<Dashboard />} />
					<Route path="/admin/cohorts" element={<Cohorts />} />
					<Route path="/admin/cohorts/addcohort" element={<CohortForm />} />
					<Route path="/admin/cohorts/:id" element={<Cohort />} />
					<Route path="/admin/cohorts/updatecohort/:id" element={<UpdateCohort />} />
					<Route path="/admin/cohorts/:id/addtrainee" element={<AddTrainee />} />
					<Route
						path="/admin/cohorts/:id/updatetrainee/:id"
						element={<UpdateTrainee />}
					/>
				</Routes>
				<Footer />
			</div>
		</AppContext.Provider>
	);
};

export default App;
