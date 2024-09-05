import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getusers() {
      const response = await axios.get(" http://localhost:3000/admin/users");
      setUsers(response.data.users);
    }

    getusers();
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Users</p>
      <UsersList users={users} />
    </div>
  );
}

function UsersList({ users }) {
  return (
    <div className="w-full h-full border p-4 text-white  ">
      <ul>
        {users.map((el) => (
          <li className="m-3" key={el._id}>
            <User name={el.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
