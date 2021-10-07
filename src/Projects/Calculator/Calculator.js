import React from "react";

const Calculator = () => {
  return (
    <>
      <div className="w-25 offset-4 my-3 text-white">
        <div className="bg-dark  ">
          <h2>Calculator</h2>
          <div className="row">
            <div className="col ">
              <button className=" "> Clear</button>
            </div>
            <div className="col ">
              <button> C </button>
            </div>
            <div className="col ">
              <button> % </button>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <button className="btn btn-primary"> 1</button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
            <div className="col ">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
