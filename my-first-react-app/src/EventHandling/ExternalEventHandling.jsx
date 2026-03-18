import React from 'react'

const ExternalEventHandling = () => {
    //!External event handler function
    let handleClick = (e) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
    };

    return (
        <div>
            <h1>External Event Handling in React JS</h1>
            <button>Clicke me</button>
        </div>

    );
};

export default ExternalEventHandling