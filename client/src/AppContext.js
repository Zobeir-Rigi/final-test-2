import { createContext } from "react";
export const AppContext = createContext({
	// these values are good for autocompletion
	userName: "",
	setUserName: () => {},
	codewarsData: [],
	setCodewarsData: () => {},
	githubData: [],
	setGitHubData: () => {},
});
