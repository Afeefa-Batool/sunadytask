import React, { useState } from "react";

const Usestate = () => {
  // use sate example with string
  const [name, setName] = useState("hello world");
  //made function for onclick event with useState
  const update = () => {
    setName("react js learning");
  };
  //useTate example with Array
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const arrayupdate = () => {
    setArr([4, 3, 2, 1]);
  };
  return (
    <div>
      <h1 className="text-center mt-5">{name}</h1>
      <div className="text-center mt-5">
        <button className="btn btn-primary mt-3" update state onClick={update}>
          update state
        </button>
      </div>
      <h1 className="text-center">List of Array Numbers</h1>
      {/* //map to fetch data of array using useState */}
      {arr.map((a) => (
        <div className="container col-md-4">
          <ul className="list-group">
            <li
              className="list-group-item disabled text-center"
              aria-disabled="true"
            >
              {a}
            </li>
          </ul>
        </div>
      ))}

      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={arrayupdate}>
          update state
        </button>
      </div>
    </div>
  );
};

export default Usestate;

// examples of react hook
// array
// Image
// Number
// object
// String
// boolean
// by click appear API
