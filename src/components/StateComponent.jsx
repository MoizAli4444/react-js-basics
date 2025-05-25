import React, { useState } from "react";

const StateComponent = () => {
  const [count, SetCount] = useState(0);

  function incValue() {
    SetCount(count + 1);
  }

  return (
    <>
      <div>Count value is : {count}</div>
      <button onClick={incValue}>Increment</button>
    </>
  );
};

export default StateComponent;
