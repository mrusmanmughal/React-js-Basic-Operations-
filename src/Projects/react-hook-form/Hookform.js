import React from "react";
import { useForm } from "react-hook-form";

const Hookform = () => {
  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container p-5 mt-2">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder=" Enter Your Name"
              name="name"
              ref={register}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder=" Enter Your F-Name"
              name="f-name"
              ref={register}
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder=" Enter Your E-mail"
              name="e-mail"
              ref={register}
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder=" Enter Your Password"
              name="password"
              ref={register}
            />
          </div>
          <select
            class="form-select  mb-3"
            aria-label="Default select example"
            name="gender"
            ref={register}
          >
            <option selected>Select Gender </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Hookform;
