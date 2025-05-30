import React, { useState } from 'react'

const Form = () => {

    // const [name,setName] = useState("");
    const [name,setName] = useState({firstName:"", lastName:""});

    function handleSubmit(e){
      e.preventDefault();
      console.log(name);
    }

  return (
    <>
        <form action="" method="post">
            <input type="text" name="" id="" onChange={(e) => setName({...name, firstName:e.target.value})} value={name.firstName} />
            <input type="text" name="" id="" onChange={(e) => setName({...name, lastName:e.target.value})} value={name.lastName} />
            <button onClick={(e)=> handleSubmit(e)}>Submit</button>
        </form>
    </>
  )
}

export default Form