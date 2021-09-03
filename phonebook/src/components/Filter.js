import React from "react";

const Filter = ({ filterName, handleChangeFilt, newFilt, handleShowAll }) => {
  return (
    <article>
      <h2>Phonebook</h2>
      <form onSubmit={filterName}>
        filter people:
        <input type="text" onChange={handleChangeFilt} value={newFilt} />
        <button type="submit">filter</button>
      </form>
      <button onClick={handleShowAll}>show all</button>
    </article>
  );
};

export default Filter;
