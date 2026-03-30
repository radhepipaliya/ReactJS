/* eslint-disable no-unused-vars */
import axios from "axios";

//! 1. Read user -> GET Method
export let getUser = () => {
  return axios.get("http://localhost:5000/users");
};

//! 2. Add user -> POST Method
export let addUser = (data) => {
  return axios.post("http://localhost:5000/users", data);
};

//! 3. Update user -> PUT/PATCH Method

//! 4. DELETE user -> DELETE Method