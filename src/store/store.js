import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import dataReducer from '../reducer/dataReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        data: dataReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore
