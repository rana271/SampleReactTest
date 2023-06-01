import React, { useEffect, useState } from "react";
import axios from "axios";
interface User {
  id: number;
  name: string;
}
const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
