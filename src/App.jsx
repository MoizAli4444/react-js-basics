import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import HandleEvents from "./components/HandleEvents";
import Hello from "./components/Hello";
import StateComponent from "./components/StateComponent";


function App() {
  // const seatNumbers = [1,3,5];

  const person = {
    name: "MoizAli4444",
    message: "Hello there,",
    seatNumbers: [1, 3, 5],
  };

  return (
    <>
      <div className="App">
        {/* <Hello name='MoizAli4444' message='Hello there,' seatNumbers={seatNumbers}/> */}
        {/* <Hello person={person} /> */}
        <Fruits/>
        <ConditionalComponent/>
        <HandleEvents/>
        <div>
          <br/>
          <StateComponent/>
        </div>
      </div>
    </>
  );
}

export default App;
