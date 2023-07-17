import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";

 export const Trainees = ( ) =>{
    const { githubData, codewarsData } = useContext(AppContext);
    const [trainees, setTrainees ] = useState([]);
    const { id } = useParams();
    useEffect ( () => {
        const fetchCohortData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/cohorts/${id}`);
                const { data } = res;
                console.log("data", data);
                setTrainees(res.data["All Trainees"]);
            } catch (error) {
                console.error("error", error);
            }
        };
        fetchCohortData();
     }
 , [id]);

 return(
    <div>
        {trainees.length>0 ?(
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Github User Name</th>
                        <th>Pull Requestes</th>
                        <th>Codewars</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trainees.map( (trainee) => (
                            <tr key={trainee.id}>
                                <td>{trainee.full_name}</td>
                                <td>{trainee.github_user_name}</td>
                                <td>{githubData.total_count || ""}25 out of 26</td>
						<td>{codewarsData.ranks?.overall?.name || ""} 5ku</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        ):(
        <p>no trainee</p>
       ) }
    </div>
 );
 };