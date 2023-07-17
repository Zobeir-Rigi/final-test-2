import { Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { Cohorts } from "./pages/Cohorts";
import { Trainees } from "./pages/Trainees";
import { AddTrainee } from "./pages/AddTrainee";
import { Header } from "./component/Header";
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
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cohorts" element={<Cohorts />} />
				<Route path="/cohorts/:id" element={<Trainees />} />
				<Route path="/cohorts/:id/addtrainee" element={<AddTrainee />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</AppContext.Provider>
	);
};

export default App;
