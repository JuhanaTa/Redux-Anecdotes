import React from 'react'
import { connect } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {createNotification, hideNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  
    //const anecdotes = useSelector(state => state.anecdotes)
    props.anecdotes.sort(function (a,b){
        return b.votes - a.votes
      })

    return(
    <div>
    {props.anecdotes.map(anecdote =>
       <div key={anecdote.id}>
       <div>
         {anecdote.content}
       </div>
       <div>
         has {anecdote.votes}
         <button onClick={() => vote(props, anecdote.id)}>vote</button>
        
       </div>
       </div>
    )}
    </div>
    )
    
}

const vote =  async (props, id) => {
  await props.voteAnecdote(id)
  const votedAnecdote = props.anecdotes.find(n => n.id === id)
  
  props.createNotification(`you voted '${votedAnecdote.content}'`)
  setTimeout(() => {props.hideNotification()},5000)
}

  const stateToProps = (state) => {
    return {anecdotes: state.anecdotes}
  }

  const mapDispatchToProps = {  
    createNotification,
    hideNotification,
    voteAnecdote,
  }

  const connectedAnecdotes = connect(
    stateToProps,
    mapDispatchToProps
  )(AnecdoteList)
 
  export default connectedAnecdotes