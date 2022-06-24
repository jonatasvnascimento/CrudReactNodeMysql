import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (values) => {
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    <div className="container mt-5">
      <h1>CRUD teste</h1>
      <div className="container">
        {/* nome */}
        <div className="row g-3 align-items-center mt-2">
          <div className="col-1">
            <label className="col-form-label">
              Nome
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        {/* Preço */}
        <div className="row g-3 align-items-center mt-0">
          <div className="col-1">
            <label className="col-form-label">
              Preço
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              name="cost"
              className="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        {/* Categoria */}
        <div className="row g-3 align-items-center mt-0">
          <div className="col-1">
            <label className="col-form-label">
              Categoria
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              name="category"
              className="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        <button className="btn btn-primary mt-3" onClick={ () => handleClickButton()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
