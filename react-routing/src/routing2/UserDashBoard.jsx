import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserDashBoard = () => {
  return (
    <div>
      <h1>UserDashBoard</h1>
      <nav>
       <Link to={"user-profile"}>User Profile</Link> <br />
       <Link to={"users-settings"}>User Setting</Link> 
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

export default UserDashBoard