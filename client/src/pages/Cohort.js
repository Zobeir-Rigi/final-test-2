import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { } from "react-router-dom";
import { Milestones } from "../component/Milestones";
import { Trainees } from "../component/Trainees";

export const Cohort = () => {
    const [milestones, setMilestone] = useState([]);
    const [trainees, setTrainees] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchCohortData = async () => {
            try {
                const res = await fetch(`/api/cohorts/${id}`);
                if (!res.ok) {
                    throw new Error("couldn't fetch cohort's data");
                }
                const data = await res.json();
                console.log("data", data);
                setTrainees(data["All Trainees"]);
                setMilestone(data["Milestones"]);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchCohortData();
    }, [id]);
    console.log(trainees);
    console.log(milestones);
    return (
        <div className="main" style={{ display: "flex", flexDirection: "column" }}>
            <h1>{milestones.name}</h1>
            <Milestones milestones={milestones} />
            <Link className="link" to={`/admin/cohorts/updatecohort/${id}`}>
                <button>Edit Cohort</button>
            </Link>
            <Trainees trainees={trainees} id={id} />
            <Link className="link" to={`/admin/cohorts/${id}/addtrainee`}>
                <button>Add New Trainee</button>
            </Link>
        </div>
    );
};