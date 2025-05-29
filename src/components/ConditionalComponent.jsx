import React from 'react'
import ConditionalComponentOne from './ConditionalComponentOne';
import ConditionalComponentTwo from './ConditionalComponentTwo';

const ConditionalComponent = () => {

    const display = false;
    return display ? <ConditionalComponentOne/> : <ConditionalComponentTwo/> ;
    

}

export default ConditionalComponent