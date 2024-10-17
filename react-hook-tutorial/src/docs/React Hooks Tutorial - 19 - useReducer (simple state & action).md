### Guide to `useReducer` Hook in React (Simple State & Action)

The `useReducer` hook in React is an alternative to `useState` for managing more complex state logic. It is especially useful when:
- State transitions involve multiple sub-values.
- The state management logic is too complex for `useState` (e.g., when you need to update multiple related state variables).

This guide walks you through the use of `useReducer` with a simple example where we manage a counter state.

### Key Concepts:
1. **State**: The value we want to manage.
2. **Action**: The signal that causes the state to change (e.g., increment, decrement, reset).
3. **Reducer**: A function that takes the current state and an action, and returns the new state.

### Steps to Implement `useReducer`:

#### Step 1: Import `useReducer` from React
```javascript
import { useReducer } from 'react';
```
This imports the `useReducer` hook.

#### Step 2: Define the Initial State
```javascript
const initialState = { count: 0 };
```
We start by defining the initial state. In this example, our state is an object with a `count` property initialized to `0`.

#### Step 3: Create the Reducer Function
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}
```
The `reducer` function takes two arguments:
- `state`: The current state of the component.
- `action`: An object that tells the reducer how to change the state.

In this example, the `reducer` function handles three types of actions: `increment`, `decrement`, and `reset`. Each case returns a new state object with an updated `count`.

#### Step 4: Set up the `useReducer` Hook
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
- `state`: The current state, initialized to `initialState`.
- `dispatch`: A function that is used to dispatch actions to the `reducer`.

`useReducer` accepts two arguments:
1. The `reducer` function.
2. The `initialState`.

The return value is an array where:
- The first element is the current state.
- The second element is a `dispatch` function, which is used to send actions to the reducer.

#### Step 5: Dispatch Actions
To update the state, you dispatch actions like this:

```javascript
<button onClick={() => dispatch({ type: 'increment' })}>+1</button>
<button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
```

Here’s how it works:
- The `dispatch` function sends an action object to the `reducer`.
- The action object has a `type` property that tells the reducer what to do.
- Depending on the action type, the `reducer` updates the state accordingly.

### Full Code Example:

```javascript
import React, { useReducer } from 'react';

// Step 2: Initial state
const initialState = { count: 0 };

// Step 3: Reducer function to handle different actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };  // Increase count by 1
    case 'decrement':
      return { count: state.count - 1 };  // Decrease count by 1
    case 'reset':
      return { count: 0 };  // Reset count to 0
    default:
      return state;  // If action is not recognized, return current state
  }
}

const CounterWithReducer = () => {
  // Step 4: Setup useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1> {/* Display current count */}
      
      {/* Step 5: Buttons to dispatch actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;
```

### Explanation of Code:
1. **Initial State (`initialState`)**: The counter starts at `0`.
2. **Reducer Function (`reducer`)**:
   - Checks the `action.type` to decide how to modify the state.
   - Updates the state based on the action (either increment, decrement, or reset).
3. **useReducer Hook**: Manages the state and handles dispatching of actions.
4. **Buttons**:
   - Each button triggers an action (either increment, decrement, or reset) by dispatching the corresponding action type.
   - When the action is dispatched, the reducer processes it and updates the state, which causes the component to re-render with the new state.

### Benefits of `useReducer`:
- **Organized State Logic**: Great for cases where you have complex state logic with multiple conditions.
- **Clear Action Handling**: The reducer function provides a clean way to manage different actions and state transitions.
- **Predictable State Updates**: State updates are predictable based on the dispatched action and reducer logic.

### When to Use `useReducer`:
- When the state is more complex than simple counters or toggles.
- When the state depends on multiple variables or when complex state transitions are needed.
- When managing forms or handling multiple fields of data.

This guide shows how `useReducer` works in a simple scenario, but it can scale to manage much more complex applications!