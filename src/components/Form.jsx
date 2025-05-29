import React, { useState } from 'react'

const Form = () => {

    const [name,setName] = useState("");

  return (
    <>
        <form action="" method="post">
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} value={name} />
        </form>
    </>
  )
}

export default Form