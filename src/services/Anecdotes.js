import axios from 'axios'

const Url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(Url)
  return response.data
}

const createNew = async (content) => {  
    const object = { content, votes: 0}  
    const response = await axios.post(Url, object)  
    return response.data
}

const update = async (id, modifiedAnecdote) => {
  const request = axios.put(`${Url}/${id}`, modifiedAnecdote)
return request.then(response => response.data)
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${Url}/${id}`)
  return response.data
}
export default { getAll, createNew, update, getAnecdote }