import React, { useState } from 'react'

const FormHandling1 = () => {
    //! State for userName input Field
    let [userName, setUsername] = useState("");
    //console.log("Usernmae:",username);

    //! State for password input filed
    let [password, setPassword] = useState("");

    //! handlusername
    let handleUsername = (e) => {
        //console.log(e.target.value);
        setUsername(e.target.value);
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(); 
        console.log();
        setUsername("");
        setPassword("");
    }

    //

    return (
        <div>
            <h1>Form Handling In react JS</h1>
            <h2>2. Controller Way(Controlled Forms)</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">UserName:</label>
                <input type="text"
                    name="username"
                    onChange={handleUsername}
                    value={userName}
                    id="userName"

                />

                <br />
                <br />
                <label htmlFor="">Password:</label>
                <input type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormHandling1