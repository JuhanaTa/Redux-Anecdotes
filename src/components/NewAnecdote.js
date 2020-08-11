import React from 'react'
import { useDispatch } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {createNotification} from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      await dispatch(createAnecdote(content))  
      dispatch(createNotification(`you added '${content}'`, 5))
    }

    
  
    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="anecdote"/>
          <button type="submit">create</button>
        </form>
        </div>
    )
  }

export default NewAnecdote