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
        <div class="row g-3 align-items-center mt-2">
          <div class="col-1">
            <label for="inputPassword6" class="col-form-label">
              Nome
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              name="name"
              class="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        {/* Preço */}
        <div class="row g-3 align-items-center mt-0">
          <div class="col-1">
            <label for="inputPassword6" class="col-form-label">
              Preço
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              name="cost"
              class="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        {/* Categoria */}
        <div class="row g-3 align-items-center mt-0">
          <div class="col-1">
            <label for="inputPassword6" class="col-form-label">
              Categoria
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              name="category"
              class="form-control"
              onChange={handleChangeValues}
            />
          </div>
        </div>

        <button class="btn btn-primary mt-3" onClick={ () => handleClickButton()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
