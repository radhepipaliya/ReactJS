import React from 'react'
import Dummy from './Dummy'
import FunCompo1 from './Components/FunCompo1'
import ClassCompo from './Components/ClassCompo'
import FunCompo2 from './Components/FunCompo2'
import Parent from './props/Parent'
// rafce - react arrow function component with export default
const App = () => {
  return (
    <div>
        <h1>App Component</h1>
        {/* <hr />
        <Dummy/>
        <hr />
        <FunCompo1/>
        <FunCompo2/>
        <ClassCompo/>2 */}
      <Parent/>
    </div>

  )
}

export default App