import { useState, useEffect } from 'react';
import axios from 'axios';

function API() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addUser() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName === '' || trimmedEmail === '') {
      alert('Please fill all the fields');
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        name: trimmedName,
        email: trimmedEmail,
      });
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setName('');
      setEmail('');
      alert('User added successfully');
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUser(id, updatedName = name, updatedEmail = email) {
    const trimmedName = updatedName.trim();
    const trimmedEmail = updatedEmail.trim();

    if (trimmedName === '' || trimmedEmail === '') {
      alert('Please fill all the fields');
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        name: trimmedName,
        email: trimmedEmail,
      });
      const updatedUser = response.data || { id, name: trimmedName, email: trimmedEmail };

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
      );
      setName('');
      setEmail('');
      alert('User updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update user');
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      alert('User deleted successfully');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div>
        <h1>React CRUD Operations</h1>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button onClick={addUser}>Add</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} style={{ margin: '20px', border: '2px solid brown' }}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <strong>{user.name}</strong>
            <span>({user.email})</span>
            <button type="button" onClick={() => updateUser(user.id, name, email)} style={{ marginLeft: 8 }}>
              Update
            </button>
            <button type="button" onClick={() => deleteUser(user.id)} style={{ marginLeft: 8 }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default API;
