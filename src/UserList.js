import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  // State to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);
  // State to handle loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data); // Set the list of users
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError(err.message); // Set error message if there's an error
        setLoading(false); // Set loading to false
      });
  }, []);

  // Render loading or error message if applicable
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render list of users
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
