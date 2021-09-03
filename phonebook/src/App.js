import React, { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import People from "./components/People";

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
    <section>
      <Filter
        filterName={filterName}
        handleChangeFilt={handleChangeFilt}
        newFilt={newFilt}
        handleShowAll={handleShowAll}
      />
      <Form
        addPerson={addPerson}
        handleChangeName={handleChangeName}
        newName={newName}
        newNum={newNum}
        handleChangeNum={handleChangeNum}
      />

      <People names={namesToShow} />
    </section>
  );
};

export default App;
