import React from 'react'

export default function Alert(props) {
   
   const capitalise = (word) => {
      
    const newWord = word.toLowerCase();
     return newWord.charAt(0).toUpperCase() + newWord.slice(1);
   }
    return (
         props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(props.Alert.type)}</strong>: {props.Alert.msg}
           </div>
    )
}
  