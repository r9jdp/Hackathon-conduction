import React, { createContext, useState } from "react";

// Create the context
const userContextIndividual = createContext();

const IndividualProvider = ({ children }) => {
  const [SideBaropen, setSideBaropen] = useState(false);
  const [userLoginDetails, setUserLoginDetails] = useState(null);
  const [ResumeData, setResumeData] = useState(null);

  return (
    <userContextIndividual.Provider
      value={{
        SideBaropen,
        setSideBaropen,
        userLoginDetails,
        setUserLoginDetails,
        ResumeData,
        setResumeData,
      }}
    >
      {children}
    </userContextIndividual.Provider>
  );
};

export default IndividualProvider;
export { userContextIndividual };
