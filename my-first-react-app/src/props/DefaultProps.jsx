import React from 'react'

//! Default props -> inside the function defination
const DefaultProps = ({name="Guest"}) => {
    return (
    <>
     <h1>Default Props Name:{name}</h1>
    </>
)
}

export default DefaultProps;