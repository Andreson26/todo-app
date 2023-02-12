import React, { useState } from "react";
//import { useLocalStorage } from '../localStorage'
import "./Form.css";

function Form({ addItem, handleFilter }) {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    validate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setIsError(true);
    } else {
      addItem(value);
      setValue("");
      setIsError(false);
    }
  };

  const validate = (value) => {
    if (!value) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          className={isError ? "error" : " "}
          onBlur={validate}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <input onChange={handleFilter}/>
      </div>
    </>
  );
}

export default Form;
