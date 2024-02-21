import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [SearchParam, setSearchParam] = useState('');
  
  return <GlobalContext.Provider value={{ SearchParam, setSearchParam }}>{children}</GlobalContext.Provider>;
}
