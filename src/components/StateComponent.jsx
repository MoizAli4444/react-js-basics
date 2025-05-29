import React, { useState } from "react";

const StateComponent = () => {
  const [count, SetCount] = useState(0);

  function incValue() {
    SetCount(count + 1);
  }

  function decValue() {
    SetCount(count - 1);
  }

  return (
    <>
      <div>Count value is : {count}</div>
      <button onClick={incValue}>Increment</button>
      <button onClick={decValue}>Decrement</button>
    </>
  );
};

export default StateComponent;
