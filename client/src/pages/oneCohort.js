import React, { useState } from "react";
import "../pages/oneCohort.css";
export const TraineesTable = () => {
  const [name, setName] = useState("");
  const [trainees, setTrainees] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddTrainee = (event) => {
    event.preventDefault(); // Prevent of loading page
    if (name.trim() !== "") {
      setTrainees([...trainees, name]);
      setName("");
    }
  };

  const handleDeleteTrainee = (index) => {
    const updatedTrainees = [...trainees];
    updatedTrainees.splice(index, 1);
    setTrainees(updatedTrainees);
  };

  return (
    <div className="oneCohort">
      <form onSubmit={handleAddTrainee}>
        <input
          value={name}
          placeholder="Enter the name"
          onChange={handleNameChange}
        />
        <button type="submit">Add a trainee</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee, index) => (
            <tr key={index}>
              <td>{trainee}</td>
              <td>
                <button>
                  View
                </button>
                <button onClick={() => handleDeleteTrainee(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};