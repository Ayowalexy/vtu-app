import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import idReducer from './id-reducer/id-reducer'
import storage from 'redux-persist/lib/storage';
import currentUserReducer from './currentUser/currentUser';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['id', 'user']
}


const rootReducer =  combineReducers({
   id: idReducer,
   user: currentUserReducer
})



export default persistReducer(persistConfig, rootReducer)