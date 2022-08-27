import React, { useState } from "react";

const Object = () => {
  // const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  const [object, setObject] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  });
  const objectupdate = () => {
    setObject({
      firstName: "Afeefa",
      lastName: "Batool",
      age: 22,
      eyeColor: "black",
    });
  };

  return (
    <div>
      <div className="container col-md-6 text-center mt-4">
        <table className="table table-success table-striped table-bordered">
          <tr>
            <th>{object.firstName}</th>
            <th>{object.lastName}</th>

            <th>{object.age}</th>
            <th>{object.eyeColor}</th>
          </tr>
        </table>
      </div>
      <div className="text-center">
        <button className="btn btn-secondary" onClick={objectupdate}>
          update object
        </button>
      </div>
    </div>
  );
};

export default Object;
