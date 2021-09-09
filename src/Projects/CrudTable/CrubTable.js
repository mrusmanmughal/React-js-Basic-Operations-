import React from "react";
import { Link } from "react-router-dom";
const CrubTable = () => {
  return (
    <>
      <h1>Crud Table</h1>
      <div className="row ">
        <div className="container">
          <Link to="/Adduser">
            <button className="btn btn-primary  w-100">Add Data</button>
          </Link>
        </div>
      </div>
      <table className="table table-hover my-3 container w-50">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Fname</th>
            <th scope="col">Email</th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <id>
              <i className="bi bi-pen mx-2 mt-5 text-success"></i>
              <i className="bi bi-trash text-danger"></i>
            </id>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CrubTable;
