import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {createNotification} from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  
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
         <button onClick={() => vote(props, anecdote.id, dispatch)}>vote</button>
        
       </div>
       </div>
    )}
    </div>
    )
    
}

const vote =  async (props, id, dispatch) => {
  
  await props.voteAnecdote(id)
  const votedAnecdote = props.anecdotes.find(n => n.id === id)
  
  dispatch(createNotification(`you voted '${votedAnecdote.content}'`, 10))
}

  const stateToProps = (state) => {
    return {anecdotes: state.anecdotes}
  }

  const mapDispatchToProps = {  
    createNotification,
    voteAnecdote,
  }

  const connectedAnecdotes = connect(
    stateToProps,
    mapDispatchToProps
  )(AnecdoteList)
 
  export default connectedAnecdotes