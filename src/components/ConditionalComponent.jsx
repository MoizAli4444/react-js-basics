import React from 'react'
import ConditionalComponentOne from './ConditionalComponentOne';
import ConditionalComponentTwo from './ConditionalComponentTwo';

const ConditionalComponent = () => {

    const display = false;
let message ;
  
    if (display) {
        message = <div><ConditionalComponentOne/></div>;
    } else {
        message = <div><ConditionalComponentTwo/></div>;
    }
  
    return message;

}

export default ConditionalComponent