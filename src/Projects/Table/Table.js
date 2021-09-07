import React, { useState } from "react";
import Navbar from "../../Navbar";
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
    // setstate((items) => {
    //   return items.splice(index, 1);
    // });
    setstate(state);
  };
  return (
    <>
      <Navbar />

      <div container>
        <div className="row">
          <div className="  container">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={name}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Father Name
                </label>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  type="Email"
                  class="form-control"
                  id="exampleInputPassword1"
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
      <h1>Table In React js </h1>
      <div className="container-fluid">
        <table class="table border border-5 border-secondary table-hover">
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
