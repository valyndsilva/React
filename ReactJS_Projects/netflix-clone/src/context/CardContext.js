import { createContext } from "react";

const CardContext = createContext({});
export const CardProvider = ({ children }) => {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
};
export default CardContext;
