import React, { useState } from "react";

import "./Table";
const Table = () => {
  const [Table, setstate] = useState({
    name: "",
    fname: "",
    email: "",
  });
  const [state, setstatee] = useState([]);
  const { name, fname, email } = Table;
  const handleChange = (e) => {
    setstate({ ...Table, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
    setstatee((items) => {
      return [...items, Table];
    });
    setstate({
      name: "",
      fname: "",
      email: "",
    });
  };
  const dell = (index) => {
    state.splice(index, 1);

    setstate(state);
  };
  return (
    <>
      <h1>Table In React js </h1>
      <div container>
        <div className="row ">
          <div className="  container p-4">
            <form>
              <div class="mb-3">
                <input
                  name="name"
                  value={name}
                  type="text"
                  class="form-control"
                  placeholder="Enter Name"
                  aria-describedby="emailHelp"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  placeholder="Enter F-name"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  name="email"
                  value={email}
                  type="Email"
                  class="form-control"
                  placeholder="Enter E-mail"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={(e) => Submit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 shadow-lg">
        <table class="table border border-3 border-secondary table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((data, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{data.name}</td>
                <td>{data.fname}</td>
                <td>{data.email}</td>
                <td>
                  <i
                    class="bi bi-trash text-danger h3"
                    onClick={() => dell(index)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
