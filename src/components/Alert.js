import React from 'react'
export default function Alert(props) {
  //this is used to capitalize first letter of a word
  const capitalize=(word)=>{
    const newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase()+newWord.slice(1);
  }
  return (
  props.alert && <div className={`alert alert-${props.alert.type} fade show`} role="alert">
{/* //this and syntax like if-else its explain if before and not true not run other and if it true run other also */}
 <strong>{props.alert.type}</strong>: {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  this is used to show cross on alert */}
</div>
  )
}
