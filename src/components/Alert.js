import React, {useState} from 'react'; 

export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-success" role="alert">
      <b>{props.alert.type}</b> : {props.alert.message}
    </div>
  )
}
