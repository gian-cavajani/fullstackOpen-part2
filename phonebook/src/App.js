import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import People from "./components/People";
import Message from "./components/Message";
import axios from "axios";
import personService from "./services/person";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newFilt, setNewFilt] = useState("");
  const [showFilter, setShow] = useState(true);
  const [menssage, setMenssage] = useState(null);
  useEffect(() => {
    personService.getAll().then((initial) => {
      setPersons(initial);
    });
  }, []);

  const handleRemove = (id) => {
    const personFiltered = persons.filter((person) => person.id === id);
    if (window.confirm(`remove ${personFiltered[0].name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();

    const objectPerson = {
      name: newName,
      number: newNum,
    };

    const persona = persons.find((e) => e.name === objectPerson.name);
    if (persona) {
      const changedNum = { ...persona, number: newNum };
      console.log(changedNum);
      if (
        window.confirm(
          `${newName} is already on the list, would you like to update the number?`
        )
      ) {
        personService.updates(persona.id, changedNum).then((response) => {
          setPersons(
            persons.map((p) => (p.id !== persona.id ? p : response.data)) //actualiza la pagina con el nuevo num.
          );
          setMenssage(
            `${changedNum.name} number updated to: ${changedNum.number}`
          );
          setTimeout(() => {
            setMenssage(null);
          }, 3000);
        });
      }
    } else {
      personService.create(objectPerson).then((newOne) => {
        setPersons(persons.concat(newOne));
        setMenssage(`Added ${objectPerson.name}`);
        setTimeout(() => {
          setMenssage(null);
        }, 3000);
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
      <Message menssage={menssage} />
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
      <h2>numbers: </h2>
      <ul>
        {namesToShow.map((names) => (
          <People
            key={names.id}
            names={names}
            remove={() => handleRemove(names.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default App;
