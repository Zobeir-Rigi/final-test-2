import { createContext } from "react";
export const AppContext = createContext({
	userName: "",
	setUserName: () => {},
	codewarsData: [],
	setCodewarsData: () => {},
	githubData: [],
	setGitHubData: () => {},
});
