import React from 'react';

const Dashboard = ({ users, name }) => (
  <>
    <h1>{name}</h1>
    <h3>This is a dashboard page!</h3>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </>
);

export default Dashboard;
