const Hello = ({person}) => {

  return (
  
    // with destructure
    <div>{person.message} {person.name} {person.seatNumbers} </div> 
  )
}

export default Hello








// const Hello = (props) => {
// // const Hello = ({name,message}) => {

//   // const {message,name} = props;

//   // props.name = 'change'; // this show error becaus props are Immutable

//   return (
//     // <div>{props.message} {props.name} {props.seatNumbers} </div>

//     // with props
//     <div>{props.person.message} {props.person.name} {props.person.seatNumbers} </div> 
//   )
// }

// export default Hello