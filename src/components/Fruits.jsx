export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
