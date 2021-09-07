import React, { useState } from "react";
import Navbar from "../../Navbar";
const Form = () => {
  const [formData, setState] = useState({
    name: "",
    place: "",
    email: "",
    password: "",
    gender: "",
  });
  const [state, setstate] = useState([]);

  const { name, email, password, gender, place } = formData;
  const handleChange = (e) => {
    setState({ ...formData, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    setstate(formData);
  };

  return (
    <>
      <Navbar />
      <h1>React Forms</h1>
      <section className="Form bg-info">
        <div className="container p-5 ">
          <form className="form-horizontal needs-validation" novalidate>
            <div class="row g-2 align-items-center ">
              <div class="col-6">
                <label for="inputPassword6" class="col-form-label">
                  NAME
                </label>

                <input
                  name="name"
                  value={name}
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  id="validationCustom01"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="col-6">
                <label for="inputPassword6" class="col-form-label">
                  Place
                </label>
                <select
                  name="place"
                  value={place}
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Place</option>
                  <option value="GRW">GRW</option>
                  <option value="LHR">LHR</option>
                  <option value="">ISL</option>
                </select>
              </div>
              <div class="col-6">
                <label for="inputPassword6" class="col-form-label">
                  Email
                </label>

                <input
                  name="email"
                  value={email}
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="col-6">
                <label for="inputPassword6" class="col-form-label">
                  PASSWORD
                </label>

                <input
                  name="password"
                  value={password}
                  type="password"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="form-check">
                <input
                  name="gender"
                  value="male"
                  class="form-check-input"
                  type="radio"
                  onChange={(e) => handleChange(e)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => handleChange(e)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Female
                </label>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary"
                  type="submit"
                  onClick={(e) => Submit(e)}
                >
                  Submit form
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="output text-center shadow   w-50 m-auto">
          <p className="text-uppercase h4 bg-dark text-white fw-bold">
            Output Will be shown here
          </p>
          <p>
            <span>Name : {state.name} </span>
          </p>
          <p>
            <span>Place : {state.place} </span>
          </p>
          <p>
            <span>Email : {state.email} </span>
          </p>
          <p>
            <span>Password :{state.password} </span>
          </p>
          <p>
            <span>Checked Value : {state.gender} </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Form;
