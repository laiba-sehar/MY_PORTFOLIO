// import React from 'react'
import React, { useState, useEffect } from "react";
const Home = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
  }, [state]);
  return (
    <div>
      <h4>For more Employee Information</h4>
      <button className="btn" onClick={() => setState(state + 1)}>
        Click Here
      </button>

      <div className="upperData">
        <h4>ID</h4>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Contact No</h4>
        <h4>Salary</h4>
        <h4>Age</h4>
        <h4>Date Of Birth</h4>
      </div>
      {data.map((element, index) => {
        return (
          <>
            <div className="data" key={index}>
              <h5> {element.id}</h5>
              <h5>{element.firstName}</h5>
              <h5>{element.lastName}</h5>
              <h5>{element.contactNumber}</h5>
              <h5>{element.salary}</h5>
              <h5>{element.age}</h5>
              <h5>{element.dob}</h5>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
