import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import "./User.css";

export const Search = () => {
	const { userName, setCodewarsData, setGitHubData } = useContext(AppContext);
	const navigate = useNavigate();
	const [error, setError] = useState(false);

	const handleSearch = () => {
		/////****GETTING CODEWARS DATA****//////
		fetch(`https://www.codewars.com/api/v1/users/${userName}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				navigate("/result");
				return setCodewarsData(data);
			})
			.catch((err) => {
				console.error(err);
				setError(true);
			});

		///////GETING GITHUB PULL REQUEST ON CYF REPOSITORI
		fetch(
			`https://api.github.com/search/issues?q=is:pr%20author:${userName}%20user:codeyourfuture`
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				return setGitHubData(data);
			})
			.catch((err) => {
				console.error(err);
				setError(true);
			});
	};
	return (
		<>
			<button className="user-button" onClick={handleSearch}>
				<span className="user-button-span">{"Let's go!"}</span>
			</button>
			{error && <p className="error">You should be a member of CYF.</p>}
		</>
	);
};
