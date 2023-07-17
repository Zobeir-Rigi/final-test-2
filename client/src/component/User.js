import "./User.css";
import { useContext } from "react";
import { Search } from "../component/Search";
import { AppContext } from "../AppContext";

export const User = () => {
	const { setUserName } = useContext(AppContext);

	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<div className="user-container">
			<h1 className="home-heading">Want to check your progress? Amazing! </h1>

			<div className="user-details">
				<label htmlFor="username">Enter Your GitHub User Name</label>
				<input
					className="form-input"
					type="text"
					id="username"
					placeholder="PetePeteLindsell"
					onChange={handleInputChange}
				/>
			</div>
			<div className="search-button">
				<Search />
			</div>
		</div>
	);
};
