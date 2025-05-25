import React, { useState } from 'react'

const StateComponent = () => {

    const [count,SetCount] = useState(0);

  return (
    <div>Count value is : {count}</div>
  )
}

export default StateComponent