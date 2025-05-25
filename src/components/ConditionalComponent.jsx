import React from 'react'
import ConditionalComponentOne from './ConditionalComponentOne';
import ConditionalComponentTwo from './ConditionalComponentTwo';

const ConditionalComponent = () => {

    const display = false;

  
    if (display) {
        return (<div><ConditionalComponentOne/></div>)
    } else {
        return (<div><ConditionalComponentTwo/></div>)
    }
  
}

export default ConditionalComponent