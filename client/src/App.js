import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <h1>CRUD teste</h1>
      <form>
        {/* nome */}
        <div class="row g-3 align-items-center mt-2">
          <div class="col-1">
            <label for="inputPassword6" class="col-form-label">
              Nome
            </label>
          </div>
          <div class="col-auto">
            <input type="text" name="name" class="form-control" />
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
            <input type="text" name="cost" class="form-control" />
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
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
