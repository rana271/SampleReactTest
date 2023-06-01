import React, { useContext } from "react";

const Salary = () => {
  let context = useContext(employeeContext);
  return (
    <div>
      <h1>Salary Component</h1>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary : <b>{context.Salary}</b>
        </label>
      </p>
    </div>
  );
};

export default Salary;
