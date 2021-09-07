import React, { useState } from "react";
import "./Todo.css";
import Navbar from "../../Navbar";

function Todo() {
  const [tododata, settododata] = useState();
  const [Show, setShow] = useState([]);
  const handleChange = (e) => {
    settododata(e.target.value);
  };
  const submit = () => {
    setShow((items) => {
      return [...items, tododata];
    });
    settododata("");
  };
  const del = (i) => {
    setShow((items) => {
      return items.filter((index) => {
        return index !== i;
      });
    });
  };
  return (
    <div className="Todo">
      <Navbar />
      <h1 className="m-3">Todo list</h1>
      <div className="container">
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Todos"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={tododata}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => submit()}
          >
            Add
          </button>
        </div>
        <ol>
          {Show.map((val, i) => (
            <li key={i}>
              {val}
              <button className="btn btn-primary mx-2" onClick={() => del(i)}>
                dell
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
