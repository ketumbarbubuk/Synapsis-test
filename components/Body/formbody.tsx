import styles from './formbody.module.css'
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "male",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    gender: "female",
    status: "inactive",
  },
];

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>(usersData);

  const [formData, setFormData] = useState<User>({
    id: 0,
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.id) {
      // edit existing user
      setUsers(
        users.map((user) =>
          user.id === formData.id ? { ...formData } : user
        )
      );
    } else {
      // create new user
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({
      id: 0,
      name: "",
      email: "",
      gender: "",
      status: "",
    });
  };

  const handleEditUser = (user: User) => {
    setFormData({ ...user });
  };

  const handleDeleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  return (
    <div>
      <h2 className={styles.title}>Users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className={styles.table}> Add/Edit User</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="gender" className={styles.label}>Gender: </label>
          <select
            id = "gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className={styles.label}>Status: </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>{formData.id ? "Update" : "Add"}</button>
      </form>
    </div>
  )
          }    
          export default UsersPage