import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const fetchAllCohorts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/cohorts");
        console.log("res.data", res.data);
        if (res.status === 200) {
          setCohorts(res.data.cohorts);
        } else {
          throw new Error("Failed to fetch cohorts");
        }
      } catch (error) {
        console.error("Error fetching cohorts:", error);
      }
    };
    fetchAllCohorts();
  }, []);

  return (
    <div>
      <h1>List of Cohorts</h1>
      {cohorts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Cohort Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((cohort) => (
              <tr key={cohort.id}>
                <td>{cohort.name}</td>
                <td><Link to= {"/trainees"}>view</Link></td>
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
