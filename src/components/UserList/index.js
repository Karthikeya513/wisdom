import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <Link to={`/users/${user.id}`}>
            <h3 className='head'>{user.name}</h3>
            <p className='para'>{user.email}</p>
            <p className='para'>{user.address.city}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
