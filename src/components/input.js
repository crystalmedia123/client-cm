import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      {/* <div className="main-form"> */}
      <div className="field">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} />
        {error && <div className="err-msg">{error}</div>}
      </div>
      {/* </div> */}
    </>
  );
};

export default Input;
