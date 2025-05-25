import React from 'react'

const HandleEvents = () => {

    function showAlertMsg() {
        alert('this is alert text');
    }

  return (
    <button onClick={showAlertMsg}>Click to see alert message </button>
  )
}

export default HandleEvents