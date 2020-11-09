// Node Syntax to show redux without react

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
// Reducer gets two parameters
// old state and action
// returns updated state
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    // always change state immutable
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
// subscribe takes a function as argument will be executed whenever state is updated
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
// takes action argument
// argument is javascript object that needs to have a type property
// you can pass any other property to the object
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
