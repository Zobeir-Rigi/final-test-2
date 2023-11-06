import { Link } from "react-router-dom";

export const CohortsTable = ({ cohortsData }) => {
	return (
		<div>
			{cohortsData.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Cohort Name</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{cohortsData.map((cohort) => (
							<tr key={cohort.id}>
								<td>{cohort.name}</td>
								<td>
									<Link className="link" to={`${cohort.id}`}>view</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No cohorts found.</p>
			)}
		</div>
	);
};
