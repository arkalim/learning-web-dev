import React from "react";

// Create a context
// We can pass in a default value which will be used if
// the provider component is not used or if no value is passed
const UserContext = React.createContext("Rahman");

// every Context object has a provider and a consumer
// React component which we need to export to use them
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
