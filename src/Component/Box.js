import React from 'react'

export default function BoxDiv(props) {
  // const [on,setON] = useState(props.color)
  const styles={
    backgroundColor : props.color ? "#222222" : "transparent"
  }
  // function toggle(){
  //     setON(prev => (!prev))
  // }
  return (
  // <div style={styles} className='Box'  onClick={()=> props.toglefunc(props.id)}></div>
  <div style={styles} className='Box'  onClick={props.toglefunc}></div>);
}

