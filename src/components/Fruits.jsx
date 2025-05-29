import Fruit from "./Fruit";

export default function Fruits() {
//   const fruits = ["Apple", "Mango", "Banana", "Banana", "Pineapple"];
  const fruits = [
    {name:"Apple", price:30},
    {name:"Mango", price:30},
    {name:"Banana", price:90},
    {name:"Pineapple", price:10},
    {name:"Banana", price:30},
];

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </>
  );
}
