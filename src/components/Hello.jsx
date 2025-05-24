// const Hello = (props) => {
const Hello = ({name,message}) => {

  // const {message,name} = props;

  return (
    <div>{message} {name}</div>
  )
}

export default Hello