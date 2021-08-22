import React from "react";

//here we create the context with createContext method
//here we can provide a default value
// if we directly used the UserComsumer in any component we can see this default value
const UserContext = React.createContext("raj");

//it takes the two methods provider and consumer

//we use the Provider when we create the component and pass the value
const UserProvider = UserContext.Provider;
//we use the Consumer when we fetch the passed value from provider and use it
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

//here we can export the UserContext for external use with the ContextType
//we use this in [Component E]
export default UserContext;
