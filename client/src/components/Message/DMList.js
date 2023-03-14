import React, { useState, useEffect } from "react";
import api from '../../api'

const DMList = ({ currentUser }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await api.get(`/api/users`);
      console.log(response.data)
      setUsers(response.data.filter((user) => user._id !== currentUser._id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.username}</h2>
        </div>
      ))}
    </div>
  );
};

export default DMList;