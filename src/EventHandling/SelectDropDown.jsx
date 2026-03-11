import React, { useState } from 'react'

const SelectDropDown = () => {
    let [country, setCountry] = useState("");
    let [selectedCountry, setSelectedCountry] = useState("");

    let handleInputChange = (e)=>{
        setCountry(e.target.value);
    };

    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log({country});
        setSelectedCountry(country);
        setCountry("");
    };
  return (
    <div>
        <h1>form Handling -select Dropdown</h1>
        <form action="">
            <label htmlFor="">Select your Country:</label>
            <select name="country" id="country" onChange={handleInputChange}>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
            </select>
            <button>Submit</button>
        </form>
        {selectedCountry && <h2>Selected Country: {selectedCountry}</h2>}
    </div>
  )
}

export default SelectDropDown