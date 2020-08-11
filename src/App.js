import React, {useEffect} from 'react'
import NewAnecdote from './components/NewAnecdote'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { setUpAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUpAnecdotes())
  }, [dispatch])

  /*useEffect(() => {    
    anecdoteService.getAll().then(anecdotes => dispatch(setUpAnecdotes(anecdotes)))  
    }, [dispatch])*/
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  )
}

export default App