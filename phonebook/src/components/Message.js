import React from "react";
const Message = ({ menssage }) => {
  if (menssage === null) {
    return null;
  }
  return (<div className="message"><p>{menssage}</p></div>)
};
export default Message;
