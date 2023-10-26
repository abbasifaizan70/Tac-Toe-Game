function Square(props){
  return(
    <button 
        className="square btn p-5 border"
        onClick={props.onClick}
      >
        {props.value}
      </button>
  )
}

export default Square;