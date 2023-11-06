import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./dashboardHero.css";
export const DashboardHero = (data) => {
  const { userName } = useContext(AppContext);
  return (
    <div className="pr_card">
      <div className="hero-title">
      <p className="dashboardHero-title">Hi, {userName}</p>
      <p className="dashboardHero-title-cohort">London9</p>
      </div>
      <div className="hero-subcontainer">
      <p className="hero-prgph">Submitted PRs: <span className="card-prgph-number">{data.achievedPulls}</span></p>
      <p className="hero-prgph">CodeWars Rank: <span className="card-prgph-number">{data.achievedRank}</span> kyu</p>
      </div>
      {/* <p className="hero-details">Scroll down to see more details</p> */}
    </div>
  );
};