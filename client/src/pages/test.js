import React, { useState } from 'react';

function Ap() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    if (name !== '') {
      setNames([...names, name]);
      setName('');
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleAddName}>Add Name</button>
    </div>
  );
}

export default Ap;
