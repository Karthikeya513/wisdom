import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <p className='paragraph'>Loading...</p>;

  return (
    <div className="user-detail">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetailPage;
