import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./User.css";
import { Search } from "./Search";

export function User() {
	const { userName, setUserName } = useContext(AppContext);

	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<div className="user-container">
			<label htmlFor="username">GitHub User Name</label>
			<input
				className="user-input"
				type="text"
				id="username"
				value={userName}
				onChange={handleInputChange}
				placeholder="Enter your Github User Name ..."
			/>
			<Search />
		</div>
	);
}
export default User;
