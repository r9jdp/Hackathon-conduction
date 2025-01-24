import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(null);
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider
      value={{ resumeData, setResumeData, userData, setUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);
