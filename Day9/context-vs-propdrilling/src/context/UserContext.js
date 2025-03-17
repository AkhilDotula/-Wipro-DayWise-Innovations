import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName] = useState("Mani"); // Store global state

  return (
    <UserContext.Provider value={{ userName }}>
      {children}
    </UserContext.Provider>
  );
};