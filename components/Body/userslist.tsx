import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
