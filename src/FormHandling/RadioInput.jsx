import React, { useState } from "react";

const RadioInput = () => {
  let [formData, setFormData] = useState({
    gender: "",
  });

  //! State for Selected gender

  let [selectedGender, setSelectedGender] = useState("");
  

  //! handleInpputChange
  let handleInputChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  //! handleSubmit
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSelectedGender(formData.gender);
    setFormData({ gender: "" });
  };

  return (
    <div>
      <h1>Radio Input - Radio Input</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Gender</label>
        <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleInputChange}
          />{" "}
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleInputChange}
          />{" "}
          Female
        </label>
        <label htmlFor="other">
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleInputChange}
          />{" "}
          other
        </label>
        <br />
        <button>Submit</button>
      </form>

      <p>{selectedGender}</p>
    </div>
  );
};

export default RadioInput;
