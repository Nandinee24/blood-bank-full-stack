import React from "react";

const InputType = ({
  labelFor,
  labelText,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="form-floating mb-3 a-center j-center">
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={labelFor}>{labelText}</label>
      </div>
    </>
  );
};

export default InputType;
