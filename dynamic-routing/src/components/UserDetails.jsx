import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UserDetails = () => {
  let navigate = useNavigate();
  const {state} = useLocation();

  if(!state){
    return(
      <div>No user data Found</div>
    );
  }
let goBackMain =() =>{
  navigate("/");
};

  return (
    <div>
      <h1>{state.login}'s Profile</h1>
      <main>
        <aside>
          <div>
            <img src={`${state.avatar_url}`} alt={`${state.login}`} />
          </div>
          <p>
            ID: {state.id}
          </p>
        </aside>
        
      </main>
    </div>
  )
}

export default UserDetails