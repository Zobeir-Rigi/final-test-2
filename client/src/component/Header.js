import "./header.css";
import { Link } from "react-router-dom";
import imageSrc from "../../data/imge/cyf-logo.png";
export const Header = () => {
	return (
		<header>
			<Link to={"/"}>
				<img
					className="logo"
					src={imageSrc}
					alt="CYF"
				/>
			</Link>
			<p className="topic">
				<span className="cyf">CYF</span>{" "}
				<span className="progress">progress tracker</span>
			</p>
			<p className="team-name">Ctrl + Shift + Learn</p>
		</header>
	);
};
