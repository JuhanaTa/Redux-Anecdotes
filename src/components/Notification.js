import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  if(props.notification.content === ''){
    console.log("called")
    return ( null )
  }
  else {
  return (
    <div style={props.notification.style}>
      {props.notification.content}
    </div>
    )
  }
  
}

const stateToProps = (state) => {
  return{ notification: state.notification }
}

const connectedNotifications = connect(
  stateToProps
)(Notification)

export default connectedNotifications