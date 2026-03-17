import React, { useState } from "react";
import { resume } from "react-dom/server";

const FinalForm = () => {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    city: "",
    resume: null,
  });

  let { firstName, lastName, email, password, confirmPassword } = formData;

  let handleInputChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skills) => skills != value),
      }));
    } else if (type == "file") {
      let file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        resume: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
  };

  return (
    <div>
      <h1>Registration form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@gmail.com"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Passsword"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Confirm Passsword"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="">Gender</label>
        <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            onChange={handleInputChange}
          />{" "}
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={handleInputChange}
          />{" "}
          Female
        </label>
        <label htmlFor="other">
          <input
            type="radio"
            name="gender"
            id="other"
            onChange={handleInputChange}
          />{" "}
          Other
        </label>
        <br />
        <label htmlFor="">Skills</label>
        <label htmlFor="html">
          <input
            type="checkbox"
            name="skills"
            id="html"
            onChange={handleInputChange}
          />
          HTML
        </label>
        <label htmlFor="css">
          <input
            type="checkbox"
            name="skills"
            id="css"
            onChange={handleInputChange}
          />
          CSS
        </label>
        <label htmlFor="javascript">
          <input
            type="checkbox"
            name="skills"
            id="javascript"
            onChange={handleInputChange}
          />
          Javascript
        </label>
        <label htmlFor="react">
          <input
            type="checkbox"
            name="skills"
            id="react"
            onChange={handleInputChange}
          />
          React JS
        </label>
        <label htmlFor="java">
          <input
            type="checkbox"
            name="skills"
            id="java"
            onChange={handleInputChange}
          />
          CSS
        </label>
        <label htmlFor="javascript">
          <input
            type="checkbox"
            name="skills"
            id="python"
            onChange={handleInputChange}
          />
          Python
        </label>
        <label htmlFor="sql">
          <input
            type="checkbox"
            name="skills"
            id="sql"
            onChange={handleInputChange}
          />
          SQL
        </label>
        <br />
        <label htmlFor="">Upload</label>
        <input
          type="file"
          name="resume"
          id="resume"
          onChange={handleInputChange}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default FinalForm;
