## 1. setting our index.js
    1. install `redux` and `react-redux`
    2. import `createStore` function from `redux`
    3. import `Provider` component from `react-redux`
    4. import reducer from reducer folder
    5. create store
        `const store = createStore(rootReducer);`
    6. wrap our app with our Provider component
    7. pass store into Provider as props


## 2. setting our reducer
    1. initialize initialState
    2. create our reducer function
    3. pass in state and action to reducer function

```
function rootReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {todos: [...state.todos, action.payload]}
        default:
            return state
    }
}
```


## 3. setting up our actions
    1. define actions
    2. created action creator function

```
export const ADD_TODO = "ADD_TODO";

export function addTodo(todo) {
    return {type: "ADD_TODO", payload:todo}
}
```


## 4. connecting redux with our app
    1. go to component where you're using redux
    2. import `connect` function from `react-redux`
    3. import `addTodo` action creator function

    4. use connect function at export
    `export default connect(mapStateToProps, {addTodo})(App);`