import {editDataReducer} from './edit.reducer'
import {listReducer} from './list.reducer'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    editDataReducer,
    listReducer
})

export default allReducer;