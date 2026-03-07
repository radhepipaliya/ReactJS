import React from 'react'
import Dummy from './Dummy'
import FunCompo1 from './Components/FunCompo1'
import ClassCompo from './Components/ClassCompo'
import FunCompo2 from './Components/FunCompo2'
import Parent from './props/Parent'
import DefaultProps from './props/DefaultProps'
import CommonCompo from './props/CommonCompo'
import Home from './props/Home'
import About from './props/About'
// rafce - react arrow function component with export default
const App = () => {
  return (
    <React.Fragment>
        <h1>App Component</h1>
        {/* <hr />
        <Dummy/>
        <hr />
        <FunCompo1/>
        <FunCompo2/>
        <ClassCompo/>2 */}
      {/* <Parent/> */}
      {/* <CommonCompo/> */}
      {/* <Home/>
      <About/> */}

      
       
    </React.Fragment>

  )
}

export default App;