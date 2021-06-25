import React from "react";
import "./ErrorText.scss";

const ErrorText = ({ msg }) => {
  return <div className="error-message">{msg}</div>;
};

export default ErrorText;
