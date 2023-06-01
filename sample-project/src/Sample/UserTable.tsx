import React from "react";
import useUser from "./hook/useUser";

const UserTable = () => {
  const { users, error, isLoading } = useUser();
  return (
    <div>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.userName}</td>

            <td></td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default UserTable;
