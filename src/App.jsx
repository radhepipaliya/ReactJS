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
import ExternalEventHandling from './EventHandling/ExternalEventHandling'
import ChangeEvent from './EventHandling/ChangeEvent'
import RadioInput from './FormHandling/RadioInput'
import CheckboxInput from './FormHandling/CheckboxInput'
import SelectDropDown from './EventHandling/SelectDropDown'
// rafce - react arrow function component with export default
const App = () => {
  return (
    <React.Fragment>
      <h1>App Component</h1>
         {/* <h1>Hello React</h1>
      <p>This is subheading</p>
      <img src="https://picsum.photos/300/200" alt="" />
      <br />
      <hr /> */}
      {/* <h1>{username === "" ? "John" : " Guest"}</h1> */}
      {/* <button onClick={}></button> */}

      {/* <Fragment1 /> */}
      {/* <Fragment2 /> */}
      {/* <FunCompo1 />
      <FunCompo2 /> */}
      {/* <Parent /> */}
      {/* <Component1 /> */}
      {/* <CommonCompo /> */}
      {/* <Home />
      <About /> */}
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <CounterWithClass />
      <hr />
      <Counter /> */}
      {/* <UpdatingMultipleStates /> */}
      {/* <ListRendering /> */}
      {/* <ProductsRendering /> */}
      {/* <ProductList /> */}
      {/* <InlineEvent /> */}
      {/* <ExternalEventHandling /> */}
      {/* <EventWithParameter /> */}
      {/* <ChangeEvent /> */}
      {/* <SubmitEvent/> */}
      {/* <IfElseRendering /> */}
      {/* <TernaryOperator /> */}
      {/* <ChangeEvent /> */}
        {/* <RadioInput/> */}
        {/* <CheckboxInput/> */}
        <SelectDropDown/>
    </React.Fragment>

  )
}

export default App;