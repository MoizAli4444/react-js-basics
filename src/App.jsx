import Hello from "./components/Hello"


function App() {

  const seatNumbers = [1,3,5];

  return (
    <>
      <div className='App'>
       <Hello name='MoizAli4444' message='Hello there,' seatNumbers={seatNumbers}/>
      </div>
    </>
  )
}

export default App
