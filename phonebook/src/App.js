import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import People from "./components/People";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newFilt, setNewFilt] = useState("");
  const [showFilter, setShow] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      axios
        .post("http://localhost:3001/persons", objectPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
        });
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
