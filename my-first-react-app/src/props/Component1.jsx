import React from 'react'
import Component2 from './Component2'

const Component1 = () => {
    let employee ={
        eName:"kinshuk",
        eAge: 20,
    }
  return (
    <div>Component1
        <hr />
        <Component2{...employee}/>
    </div>
  )
}

export default Component1