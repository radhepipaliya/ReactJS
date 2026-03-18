import React, { useState } from "react";

const CheckboxInput = () => {
  //! State for skills in the form object
  let [formData, setFormData] = useState({
    skills: [],
  });

  let { skills } = formData;

  let handleInputChange = (e) => {
    setFormData({ ...formData, skills: e.target.value });
    let { value, checked } = e.target;
    if (checked) {
      //! If chekced == true that means add the skills the given array.
      setFormData({ skills: [...skills, value] });
    } else {
      //! If you unchecked any skills that means it will remove the skill from the given array.

      setFormData({ skills: skills.filter((skills) => skill !== value) });
    }
  };

  let handleSubmit = (e) => {   
    e.preventDefault();
    console.log(formData);
    setFormData({ skills: [] });
  };

  return (
    <div>
      <h2>Form handling - Checkbox Input</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="html">
          <input
            type="checkbox"
            name="skills"
            id="html"
            value="html"
            onChange={handleInputChange}
            checked={skills.includes("html")}
          />
          html
        </label>
        <label htmlFor="css">
          <input
            type="checkbox"
            name="skills"
            id="css"
            value="css"
            onChange={handleInputChange}
            checked={skills.includes("css")}
          />
          css
        </label>
        <label htmlFor="js">
          <input
            type="checkbox"
            name="skills"
            id="js"
            value="js"
            onChange={handleInputChange}
            checked={skills.includes("js")}
          />
          JS
        </label>
        <label htmlFor="java">
          <input
            type="checkbox"
            name="skills"
            id="java"
            value="java"
            onChange={handleInputChange}
            checked={skills.includes("java")}
          />
          Java
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CheckboxInput;
