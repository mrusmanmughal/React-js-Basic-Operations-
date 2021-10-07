import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    fname: "",
    email: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const loadData = await axios.get(`http://localhost:3099/posts/${id}`);
    setUser(loadData.data);
  };
  const { name, email, fname } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const pushData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3099/posts/${id}`, user);

    history.push("/crudTable");
  };
  return (
    <>
      <div className="container p-5">
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

export default Edit;
