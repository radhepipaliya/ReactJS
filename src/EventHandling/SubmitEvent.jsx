import React from 'react'

const SubmitEvent = () => {
    let handleInputChange = () => {

    }

    //! Submit event handler fucntion 
    let handleSumit = (e) => {
        e.preventDefault();
        console.log("Form Submitted Sucessfully");
    };
    return (
        <div>
            <h1>onSubmit Event Demo</h1>
            <form action="" onSubmit={ }>
                <label htmlFor="">FirstName:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">LastName:</label>
                <input type="text" name="" id="" />
                <button type="button">Submit</button>
            </form>
        </div>
    )
}

export default SubmitEvent