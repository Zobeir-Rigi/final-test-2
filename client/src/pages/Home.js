import { User } from "../component/User";
import "./home.css";

export const Home = () => {
	return (
		<main className="home">
			<div className="home-card">
				<User />
			</div>
		</main>
	);
};
