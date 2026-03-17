import React, { createContext, useContext, useState } from 'react'

//! Create a context for count
export let CounterContext = createContext();

const CounterProvider = ({ children}) => {
    //! State for count
    let [count, setCount] = useState(0);
    console.log("Count:", count);
  return (
    <CounterContext value={{count, setCount}}>
        {children}
    </CounterContext>
  );
};

//! Creating a custom hook for easy use.
export let useCounter = () =>{
    return useContext(CounterContext);
}

export default CounterProvider;