export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  return (
    <>
      {fruits.map((fruit) => (
        <h2>{fruit}</h2>
      ))}
    </>
  );
}
