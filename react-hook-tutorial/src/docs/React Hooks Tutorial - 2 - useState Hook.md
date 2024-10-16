### React Hooks Tutorial - useState Hook (Functional Components)

#### Key Concepts:

1. **Introduction to Hooks**:
   - Hooks let you use React features like state in functional components, which previously could only be done in class components.
   - The `useState` hook enables you to add state management within functional components.

2. **Steps to Implement a Counter with useState Hook**:
   - **Step 1**: Create a functional component.
   - **Step 2**: Declare a state variable using the `useState` hook.
   - **Step 3**: Create a method to update the state.

#### Example: Counter with useState

1. **Creating the Functional Component**:
   - Start by using the `useState` hook to manage the state.
   - The syntax involves calling `useState` with an initial state value (e.g., `0`) and returns two values: the current state (`count`) and a function to update the state (`setCount`).
   - Example:
     ```jsx
     const [count, setCount] = useState(0);
     ```

2. **Using the State in JSX**:
   - The current `count` is displayed in the component, and the `setCount` method is used to update it when a button is clicked.
   - Example of button JSX:
     ```jsx
     <button onClick={() => setCount(count + 1)}>Count {count}</button>
     ```

3. **Array Destructuring**:
   - `useState` returns a pair of values, and ES6 array destructuring is used to extract them into variables.
   - You can name the state and its updater function anything you like, but meaningful names like `count` and `setCount` make the code more readable.

4. **How it Works**:
   - Initially, `count` is set to `0` (the argument passed to `useState`).
   - When the button is clicked, `setCount` is called, which updates `count` and triggers a re-render.
   - During the re-render, the updated `count` is displayed.

#### Important Rules for Hooks:

1. **Call Hooks at the Top Level**:
   - Hooks should only be called at the top level of your component and not inside loops, conditions, or nested functions.

2. **Call Hooks Only in React Functions**:
   - Hooks should only be called from within React functional components, not regular JavaScript functions.

#### Summary:
- **useState** hook simplifies state management in functional components.
- Import the `useState` hook, declare state and its updater function using array destructuring, and use the state in the component’s JSX.
- Follow the two crucial rules to avoid common errors when using hooks.

This guide gives you a concise understanding of how to use the `useState` hook in functional components for managing state in React.