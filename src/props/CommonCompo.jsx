import React from 'react'
import DefaultProps from './DefaultProps';
import PropsChild from './PropsChild';
const CommonCompo = () => {
  return (
    <>
        {/* <DefaultProps/>
        <DefaultProps name="John" /> */}
        <PropsChild>
            <h1>Hello Children components</h1>
            <p>You can access me by using props. children</p>
            
        </PropsChild>
    </>
  );
}

export default CommonCompo;