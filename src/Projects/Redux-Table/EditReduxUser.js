import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const EditReduxUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    fname: "",
    email: "",
  });
  const { name, email, fname } = user;

  // use Effect getting data from db
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const loadData = await axios.get(`http://localhost:3099/ReduxTable `);
    setUser(loadData.data);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const pushData = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3099/ReduxTable`, user);
    history.push("/ReduxTable");
  };
  return (
    <>
      <div className="container p-5">
        <h2 className="text-uppercase">Redux Edit User</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">F-Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter F-Name"
              name="fname"
              value={fname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword3">E-mail</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your E-mail"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br />
          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => pushData(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditReduxUser;
