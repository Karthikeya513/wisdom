import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
