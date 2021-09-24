import React from "react";

const Form = ({
  addPerson,
  handleChangeName,
  newName,
  newNum,
  handleChangeNum,
}) => {
  return (
    <article>
      {" "}
      <form onSubmit={addPerson}>
        name: <input type="text" onChange={handleChangeName} value={newName} />
        number: <input type="text" onChange={handleChangeNum} value={newNum} />
        <button type="submit">add</button>
      </form>
    </article>
  );
};

export default Form;
