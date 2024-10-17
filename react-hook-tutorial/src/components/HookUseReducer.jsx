import { useReducer } from 'react';

// Define the initial state for the counter
const initialState = { count: 0 };

// Action types to avoid string literals in the reducer
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

// Reducer function to update the state based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state; // Return the current state if the action type is not recognized
  }
}

const HookUseReducer = () => {
  // useReducer hook to manage the counter state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Hook useReducer Example</h2>
      {/* Display the current count */}
      <h1>Count: {state.count}</h1>
      {/* Dispatch different actions to the reducer */}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+1</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-1</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </div>
  );
};

export default HookUseReducer;
