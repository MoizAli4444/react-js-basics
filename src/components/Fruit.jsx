export default function Fruit(props) {
  return (
    <>
      <li>
        {props.name} {props.price}
      </li>
    </>
  );
}
