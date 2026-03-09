import React from 'react'

const EventWithParameter = () => {
let handleName =(name)=>{
    alert(`Hello, How are you ${name}? `);
}

let handleAge = (age)=>{
    alert(`your age is ${age}`);
}

    return (
        <div>
            <h1>Event With Parameter</h1>
            <button onClick={() => {
                (handleName("John"), handleAge(20));
            }}>Display Name and Age</button>
        </div>

    )
}

export default EventWithParameter