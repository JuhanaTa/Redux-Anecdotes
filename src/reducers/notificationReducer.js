
const initialState = []

let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }


const notificationReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CREATE_NOTIFICATION':
        return action.data
        case 'SET_HIDDEN':
        return action.data
    default:
        return initialState
            
    }
}


export const createNotification = (content) => {
    
    console.log("gone through")
    return async dispatch => {

        dispatch
        ({ 
            type: 'CREATE_NOTIFICATION', 
            data: {content, style} 
        })
        
    }
    

}

 export const hideNotification = (timeoutID) => {
    const content = ''
    return async dispatch => {
    dispatch
        ({
        type: 'SET_HIDDEN',
        data: {content}
    })
}}


export default notificationReducer