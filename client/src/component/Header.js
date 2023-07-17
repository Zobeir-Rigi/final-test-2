import "./header.css";

export const Header = () => {
	return (
		<header>
			<img
				className="logo"
				src="https://syllabus.codeyourfuture.io/img/logo.png"
				alt="CYF"
			/>
			<div className="topic">
				<span className="cyf">CYF</span>{" "}
				<span
					className="progress">
					progress tracker
				</span>
			</div>
			<p className="team-name">Ctrl + Shift + Learn</p>
		</header>
	);
};
