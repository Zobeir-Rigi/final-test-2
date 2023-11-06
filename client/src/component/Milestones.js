import milestonesData from "../../data/milestones.json";
import "./trainees.css";
export const Milestones = ({ milestones }) => {

console.log(milestones);
console.log(milestones["m_1"]);
    return (
        <div className="trainees">
        <table>
            <thead>
                <tr>
                    <th>milestone</th>
                    <th>Deadline</th>
                    <th>Pulls</th>
                    <th>Codewars</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>start</td>
                    <td>{new Date(milestones["start_date"]).toLocaleDateString()}</td>
                    <td>{milestonesData.start.pulls}</td>
                    <td>{milestonesData.start.codewars}</td>
                </tr>
                <tr>
                    <td>HTML-CSS</td>
                    <td>{new Date(milestones["m_1"]).toLocaleDateString()}</td>
                    <td>{milestonesData["html_css"].pulls}</td>
                    <td>{milestonesData["html_css"].codewars}</td>
                </tr>
                <tr>
                    <td>JS1-Week2</td>
                    <td>{new Date(milestones["m_2"]).toLocaleDateString()}</td>
                    <td>{milestonesData["js1_week2"].pulls}</td>
                    <td>{milestonesData["js1_week2"].codewars}</td>
                </tr>
                <tr>
                    <td>JS2-Week1</td>
                    <td>{new Date(milestones["m_3"]).toLocaleDateString()}</td>
                    <td>{milestonesData["js2_week1"].pulls}</td>
                    <td>{milestonesData["js2_week1"].codewars}</td>
                </tr>
                <tr>
                    <td>JS3-Week3</td>
                    <td>{new Date(milestones["m_4"]).toLocaleDateString()}</td>
                    <td>{milestonesData["js3_week3"].pulls}</td>
                    <td>{milestonesData["js3_week3"].codewars}</td>
                </tr>
                <tr>
                    <td>React-Week2</td>
                    <td>{new Date(milestones["m_5"]).toLocaleDateString()}</td>
                    <td>{milestonesData["react_week2"].pulls}</td>
                    <td>{milestonesData["react_week2"].codewars}</td>
                </tr>
                <tr>
                    <td>Node-Week2</td>
                    <td>{new Date(milestones["m_6"]).toLocaleDateString()}</td>
                    <td>{milestonesData["node_week2"].pulls}</td>
                    <td>{milestonesData["node_week2"].codewars}</td>
                </tr>
                <tr>
                    <td>DB-Week3</td>
                    <td>{new Date(milestones["m_7"]).toLocaleDateString()}</td>
                    <td>{milestonesData["db_week3"].pulls}</td>
                    <td>{milestonesData["db_week3"].codewars}</td>
                </tr>
                <tr>
                    <td>FP-Week2</td>
                    <td>{new Date(milestones["m_8"]).toLocaleDateString()}</td>
                    <td>{milestonesData["fp_week2"].pulls}</td>
                    <td>{milestonesData["fp_week2"].codewars}</td>
                </tr>
            </tbody>
        </table>
    </div>

    );

};