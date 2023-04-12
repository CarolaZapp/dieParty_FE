import { createContext, useState } from "react";

const UserContext = createContext({})

const UserContextProvider = (props) => {
  const userContext = useState(UserContext)
  return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>
}

export default UserContext
export {UserContextProvider}