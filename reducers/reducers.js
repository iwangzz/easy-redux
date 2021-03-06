import { combineReducers } from "redux"
import { ADD_TODO, COMPLETE_TODO } from '../actions/actions'

function todos (state=[], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                  text: action.text,
                  completed: false
                }
              ]
            break;
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                  completed: true
                }),
                ...state.slice(action.index + 1)
              ]
            break;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp

