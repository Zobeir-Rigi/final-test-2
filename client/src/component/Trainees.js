import { Link } from "react-router-dom";
import "./trainees.css";

export const Trainees = ({ trainees,id }) => {
	return (
		<div className="trainees">
			{trainees.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Github User Name</th>
							<th>Full Name</th>
							<th>Pull Requestes</th>
							<th>Codewars</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{trainees.map((trainee) => (
							<tr key={trainee.id}>
								<td>{trainee.github_user_name}</td>
								<td>{trainee.full_name}</td>
								<td>25 out of 26</td>
								<td> 5ku</td>
								<td>
									<span>
										<Link className="link" to={`/admin/cohorts/${id}/updateTrainee/${trainee.id}`}>Edit</Link>
									</span>
									<span>
										<Link className="link">View</Link>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No one enrolled yet ...</p>
			)}
		</div>
	);
};
