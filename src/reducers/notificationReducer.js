
const initialState = []
let timeoutID
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


export const createNotification = (content, time) => {
    window.clearTimeout(timeoutID)
    time = time * 1000
    console.log("gone through")
    return async dispatch => {

        dispatch
        ({ 
            type: 'CREATE_NOTIFICATION', 
            data: {content, style} 
        })

        timeoutID = setTimeout(() => {
        console.log('id of timeout: ' +timeoutID)
        content = ''
        dispatch
        ({ 
            type: 'SET_HIDDEN',
            data: {content}
        })
        }, time);
        
    }
    

}

 /*export const hideNotification = (timeoutID) => {
    console.log('inside hide')
    const content = ''
    return async dispatch => {
    dispatch
        ({
        type: 'SET_HIDDEN',
        data: {content}
    })
}}*/


export default notificationReducer