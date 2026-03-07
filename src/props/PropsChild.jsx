import React from 'react'

const PropsChild = ({ childern }) => {
    // console.log(props);
    //console.log(props.children);
  return (
    <div>
        <h1>PropsChild</h1>
        {/* props.children */}
        {childern}
    </div>
  );
}

export default PropsChild;