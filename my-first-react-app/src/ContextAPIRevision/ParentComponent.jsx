import React, { createContext } from "react";

//! Step-1: Create a context
export let nameContext = createContext(null);
//console.log(nameContext);
const ParentComponent = ({ children }) => {
  // console.log(nameContext);
  return (
    // consoel.log(props.children);
    //! Step -2: provide the context
    <nameContext.Provider value={{ name: "john" }}>
      {children}
    </nameContext.Provider>
  );
};

export default ParentComponent;
