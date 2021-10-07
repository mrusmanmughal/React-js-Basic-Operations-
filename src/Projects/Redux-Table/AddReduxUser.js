import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Push_Data } from "../../Actions";
const AddReduxUser = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    fname: "",
    email: "",
  });
  const { name, email, fname } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sendtodb = () => {};
  return (
    <>
      <div className="container p-5">
        <h2 className="text-uppercase">Redux Add User</h2>
        <div>
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
            onClick={(e) =>
              dispatch(Push_Data(user), sendtodb(), history.push("/ReduxTable"))
            }
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddReduxUser;
