import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [tododata, settododata] = useState();
  const [Show, setShow] = useState([]);
  const handleChange = (e) => {
    settododata(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    setShow((items) => {
      return [...items, tododata];
    });
    settododata("");
  };
  const del = (i) => {
    const data = Show.filter((item, index) => index !== i);
    setShow(data);

    // const fil = Show.map((item, i) => console.log(i));
  };
  return (
    <div className="Todo">
      <h1 className="m-3">Todo list</h1>
      <div className="container p-5">
        <form
          action=""
          class="  needs-validation"
          novalidate
          onSubmit={(e) => submit(e)}
        >
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Todos"
              value={tododata}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => handleChange(e)}
            />
            <div class="invalid-feedback">Please choose a username.</div>

            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              <i className="bi bi-plus h5"></i>
            </button>
          </div>
        </form>
        <ol>
          {Show.map((val, i) => (
            <div className="px-2">
              <li className="border" key={i}>
                {val}
                <i
                  className="bi bi-trash ps-3 h4 text-danger  "
                  onClick={() => del(i)}
                ></i>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
