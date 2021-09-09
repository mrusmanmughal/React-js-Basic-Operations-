import React, { useState } from "react";

const Addusers = () => {
  const [user, setUser] = useState({
    name: "",
    fname: "",
    email: "",
  });
  const { name, email, fname } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Addusers;
