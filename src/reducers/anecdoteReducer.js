
import anecdoteService from '../services/Anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
         )
    case 'ADDNEW':
      return state.concat(action.data)
    
    case 'SET_UP':
      return action.data

      default:
        return state
  }
}
export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADDNEW',
      data: {
        content: anecdotes.content,
        id: anecdotes.id,
        votes: anecdotes.votes
      }
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {

    const copyOfAnecdote = await anecdoteService.getAnecdote(id)
    copyOfAnecdote.votes ++
    const anecdotes = await anecdoteService.update(id, copyOfAnecdote)
    dispatch({
      type: 'VOTE',
      data: {id: anecdotes.id}
    })
  }
}


export const setUpAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'SET_UP',
      data: anecdotes
    })

  }
  
}

export default reducer