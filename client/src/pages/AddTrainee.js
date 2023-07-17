import { useState } from "react";

export const AddTrainee = () => {
  const [fullname, setFullName] = useState("");
  const [githubUserName, setGithubUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/cohorts/{cohortId}/trainees",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullname,
            github_user_name: githubUserName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("couldn't to add trainee");
      }

      console.log("Trainee added successfully");
    } catch (error) {
      console.error("Error adding trainee:", error);
    }
  };

  return (
    <div>
      <h2>Add Trainee</h2>
      <form onSubmit={handleSubmit}>
        <label>Github User Name:</label>
        <input
          type="text"
          value={githubUserName}
          onChange={(e) => setGithubUserName(e.target.value)}
        />

        <label>Full Name:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
