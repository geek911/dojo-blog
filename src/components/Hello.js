
import React from "react";

const Hello = () => {
    return React.createElement('div',
        {
            className: "This is a class"
        },
        React.createElement('h1', null, 'Hello Moses from barebones'));
}

export default Hello;