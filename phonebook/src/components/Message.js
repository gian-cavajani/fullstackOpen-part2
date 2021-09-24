import React from "react";
const Message = ({ menssage }) => {
  if (menssage === null) {
    return null;
  } else if (menssage === "ERROR") {
    return (
      <div className="error">
        <p>{menssage}</p>
      </div>
    );
  }
  return (
    <div className="message">
      <p>{menssage}</p>
    </div>
  );
};
export default Message;
