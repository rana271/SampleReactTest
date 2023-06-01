import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { employess } from "./Emp";
const Employee = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/details/900");
  };

  return (
    <>
      <tbody>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Salry</th>
          <th>DOB</th>
        </tr>
        {employess.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.anualSalary}</td>
            <td>{item.dateofBirth}</td>
            <td>
              <button onClick={goDetails}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/user/")}> Add User</button>
    </>
  );
};

export default Employee;
