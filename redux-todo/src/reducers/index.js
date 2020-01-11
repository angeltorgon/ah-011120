import { ADD_TODO } from '../actions';

const initialState = {
    todos: ["Learn redux"]
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {todos: [...state.todos, action.payload]}
        default:
            return state
    }
}

export default rootReducer;