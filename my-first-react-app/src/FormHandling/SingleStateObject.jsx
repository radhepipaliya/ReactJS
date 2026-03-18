import React from 'react'

const SingleStateObject = () => {
//! single state for 3 input filed in the form of object

let [formData, setFormData] = userState({
    username:"",
    email:"",
    password:"",
});

//! Destrucutring the formData
let {username, email, password} = formData;

//! handleInputChange
let handleInputChange = (e) =>{
    //consoel.log(e.target.name , e.target.value);
    let {name,value} = e.target;
    //console.log(name,value);
    setFormData({...formData,[name]:value});
};

//! handleSubmit
let handleSubmit =(e)=>{
    e.preventDefault();
    console.log("Form SUbmitted");
    console.log(formData);
};

  return (
    <div>
        <h1>Single State Object handling multiple input fields</h1>
        <form action="">
            <label htmlFor="">Name:</label>
            <input type="text" name="username" id="username" value={username} onChange={handleInputChange} />
            <br />
            <br />
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={handleInputChange}/>
            <br />
            <br />
            <label htmlFor="">Password:</label>
            <input type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
            />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SingleStateObject;