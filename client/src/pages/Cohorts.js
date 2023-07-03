import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);

  const getCohorts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cohorts', {
        headers: { 'Cache-Control': 'no-cache' } // Bypass caching
      });

      if (response.status === 200) {
        const data = response.data;
        setCohorts(data);
      } else {
        throw new Error('Failed to fetch cohorts');
      }
    } catch (error) {
      console.error('Error fetching cohorts:', error);
    }
  };

  useEffect(() => {
    getCohorts();
  }, []);

  return (
    <div>
      <h1>List of Cohorts</h1>
      {cohorts.length > 0 ? (
        <ul>
          {cohorts.map((cohort) => (
            <li key={cohort.id}>
              <p>Name: {cohort.name}</p>
              <p>Start Date: {cohort.start_date}</p>
              {/* Render other cohort details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cohorts found.</p>
      )}
    </div>
  );
};
