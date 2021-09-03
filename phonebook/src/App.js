import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newFilt, setNewFilt] = useState("");
  const [showFilter, setShow] = useState(true);

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

  const filterName = (event) => {
    event.preventDefault();
    setShow(false);
  };

  const namesToShow = showFilter
    ? persons
    : persons.filter((person) => person.name === newFilt);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNum = (event) => {
    setNewNum(event.target.value);
  };
  const handleChangeFilt = (event) => {
    setNewFilt(event.target.value);
  };
  const handleShowAll = () => {
    setShow(true);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={filterName}>
        filter people:
        <input type="text" onChange={handleChangeFilt} value={newFilt} />
        <button type="submit">filter</button>
      </form>
      <button onClick={handleShowAll}>show all</button>
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
      {namesToShow.map((p) => {
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
