import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const objectPerson = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(objectPerson));
    setNewName("");
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" onChange={handleChange} value={newName} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => {
        return <p key={p.id}>{p.name}</p>;
      })}
    </div>
  );
};

export default App;
