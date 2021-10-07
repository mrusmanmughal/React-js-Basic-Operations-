import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ReduxTable = () => {
  const Table = useSelector((state) => state.CrudTableReducer.TD);
  const [TableData, setState] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const loadData = await axios.get("http://localhost:3099/ReduxTable");
    setState(loadData.data);
  };
  const Dell = async (id) => {
    await axios.delete(`http://localhost:3099/posts/${id}`);
    loadData();
  };
  return (
    <>
      <h1>React Redux js CRUD TABLE </h1>
      <div className="row  my-3">
        <div className=" w-25 offset-4 ">
          <Link to="/AddReduxUser">
            <button className="btn btn-primary  w-100">Add Data</button>
          </Link>
        </div>
      </div>
      <div className=" container w-75 p-3">
        <table className="table table-hover my-3  ">
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
            {TableData.map((val, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{val.name}</td>
                <td>{val.fname}</td>
                <td>{val.email}</td>
                <td>
                  <Link to={`EditReduxUser/${val.id}`}>
                    <i className="bi bi-pen mx-2 mt-5 text-success"></i>
                  </Link>
                  <i
                    className="bi bi-trash text-danger"
                    onClick={() => Dell(val.id)}
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

export default ReduxTable;
