import ACTIONS from "../types"

const INITIAL_STATE = {
    id: ''
}


const idReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIONS.SET_USER_ID:
            return{
                ...state,
                id: action.payload
            }
        default: return state
    }
}

export default idReducer