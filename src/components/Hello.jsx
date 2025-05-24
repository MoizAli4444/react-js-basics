const Hello = (props) => {
// const Hello = ({name,message}) => {

  // const {message,name} = props;

  // props.name = 'change'; // this show error becaus props are Immutable

  return (
    <div>{props.message} {props.name} {props.seatNumbers} </div>
  )
}

export default Hello