import React from 'react'
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
import Fileupload from './FormHandling/Fileupload'
import FinalForm from './FormHandling/FinalForm'
import ParentComponent from './ContextAPIRevision/ParentComponent'
import ChildComponent from './ContextAPIRevision/ChildComponent'
import CounterProvider from './ContextAPIRevision/CounterProvider'
import Counter from './ContextAPIRevision/Counter'
import UseEffect1 from './UseEffectHook/UseEffect1'
import UseEffect2 from './UseEffectHook/UseEffect2'
import FetchApi from './UseEffectHook/FetchApi'
import FetchApi1 from './UseEffectHook/FetchApi1'
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
        {/* <SelectDropDown/> */}
        {/* <Fileupload/> */}
        {/* <FinalForm/> */}
        {/* <ParentComponent>
          <ChildComponent/>
        </ParentComponent> */}
        {/* <CounterProvider>
          <Counter/>
        </CounterProvider> */}
        {/* <UseEffect1/> */}
        {/* <UseEffect2/> */}
        {/* <FetchApi/> */}
        <FetchApi1/>
        
    </React.Fragment>
  )
}

export default App;