import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const objectPerson = {
      name: newName,
      number: newNum,
      id: persons.length + 1,
    };

    if (persons.some((e) => e.name === objectPerson.name)) {
      return window.alert(`${newName} is already on the list`);
    } else {
      setPersons(persons.concat(objectPerson));
    }
    setNewName("");
    setNewNum("");
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNum = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input type="text" onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number:{" "}
          <input type="text" onChange={handleChangeNum} value={newNum} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => {
        return (
          <p key={p.id}>
            Name: {p.name}, Number: {p.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
