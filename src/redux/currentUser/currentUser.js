const INITIAL_STATE = {
    currentUser: "",
    email: ""
}


const currentUserReducer = (state =INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        default: return state
    }
}


export default currentUserReducer