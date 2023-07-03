import { Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useState } from "react";
import "./App.css";
// import {Home} from "./pages/Home";
import {Result} from "./pages/Result";
import { Cohorts } from "./pages/Cohorts";
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
			<Routes>
				<Route path="/" element={<Cohorts />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</AppContext.Provider>
	);
};

export default App;
