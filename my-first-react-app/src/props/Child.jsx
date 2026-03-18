import React from 'react'

const Child = (props) => {
    console.log(props);
    //* Here props is default parameter which will accept all the data coming from the parent component in the form of object.
    console.log(props);
    // Consuming a props
    // console.log(props.name);
    
    
    //! 1st of way of destructuring:
    let {name, age, skills,address,isMarried, status, sayHello, jobHaikya} = props;
    console.log(props);
    console.log(skills);
    console.log(skills[1]);
    console.log(address);
  return (
    <div>
        <h1>Child Components</h1>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        {/* <h2>Skills:{skills[0]},{skills[1]}</h2> */}
        <h2>Status:{String(status)}</h2>
        <h2>isMarried:{isMarried}</h2>
        <h2>Job:{jobHaikya}</h2>
        <button onClick={sayHello}>Say HEllo</button>
    </div>
  )
}

export default Child;   