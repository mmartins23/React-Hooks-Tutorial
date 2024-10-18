### React Hooks Tutorial: Custom Hooks – Study Guide

**Custom Hooks** in React are a way to **reuse logic** across multiple components. Instead of repeating the same logic in several components, you can extract it into a **Custom Hook** and reuse it wherever needed. Custom Hooks allow you to share functionality without compromising the component state and lifecycle.

### Key Concepts:

1. **What is a Custom Hook?**
   - A custom hook is simply a JavaScript function whose name starts with "use" and that can call other hooks within it (such as `useState`, `useEffect`, etc.).
   - It allows you to **encapsulate** stateful logic and share it across components.

2. **When to Use Custom Hooks:**
   - When you have **repeated logic** across components, such as fetching data, managing forms, or subscribing to a service.
   - Custom hooks can keep your code DRY (Don't Repeat Yourself) and make components cleaner.

---

### Step-by-Step Example: Fetching Data with a Custom Hook

Let’s walk through creating a custom hook that fetches data from an API and handles loading and error states.

#### 1. Create the Custom Hook: `useFetch`

```javascript
import { useState, useEffect } from "react";

// Step 1: Create a custom hook for fetching data
export function useFetch(url) {
  // Step 2: Define states for data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 3: Use useEffect to handle the side effect of data fetching
  useEffect(() => {
    // Fetch data from the given URL
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);  // Update the data state
      } catch (err) {
        setError(err);  // Update the error state if any error occurs
      } finally {
        setLoading(false);  // Set loading to false after the data is fetched
      }
    };

    fetchData();  // Call the async function
  }, [url]);  // Re-run effect if URL changes

  // Step 4: Return the necessary states from the custom hook
  return { data, loading, error };
}
```

#### 2. Use the Custom Hook in a Component

```javascript
import React from "react";
import { useFetch } from "./useFetch";  // Import the custom hook

export default function DataFetcher() {
  // Step 5: Use the custom hook in a component to fetch data
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  // Step 6: Render loading, error, or data states
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Step-by-Step Explanation:

1. **Create the Custom Hook (`useFetch`)**:
   - **State Definitions**: We use `useState` to create three states: `data` for storing the fetched data, `loading` to track the fetch process, and `error` to capture any errors.
   - **useEffect for Side Effects**: Inside the custom hook, we use `useEffect` to perform the data fetching logic when the component renders or when the URL changes. We use `fetch()` to get data from the given URL, handle errors, and update the states accordingly.

2. **Using the Custom Hook in a Component**:
   - The component `DataFetcher` calls the `useFetch` hook, passing in the URL of the data source.
   - The hook returns the `data`, `loading`, and `error` states, which are then used to display the appropriate UI.

3. **Rendering States**:
   - If `loading` is true, we display a "Loading..." message.
   - If `error` exists, we display the error message.
   - Once the data is fetched successfully, we map through the `data` and render the list of posts.

---

### Benefits of Custom Hooks:

- **Code Reusability**: Custom hooks allow you to extract common logic into reusable functions, making your components cleaner.
- **Separation of Concerns**: By isolating stateful logic into a custom hook, your components can focus on UI, keeping them simpler and easier to maintain.
- **Encapsulating Logic**: You can handle API calls, form logic, subscriptions, and more, all encapsulated in a single custom hook, making the logic easier to test and maintain.

---

### Key Points for Creating Custom Hooks:

1. **Prefix the Hook with `use`**:
   - This is a React convention to ensure hooks follow the rules of hooks. For example, `useFetch`, `useForm`, `useAuth`, etc.

2. **Use Built-in Hooks Inside Custom Hooks**:
   - Custom hooks rely on the same built-in hooks like `useState`, `useEffect`, `useContext`, `useReducer`, etc. The difference is that custom hooks can package and reuse them across components.

3. **Return Values from Custom Hooks**:
   - Custom hooks can return any values you need: state, methods, or even other hooks. You decide what values are useful to return based on your logic.

4. **Follow the Rules of Hooks**:
   - Custom hooks must follow the **rules of hooks**: they can only be used at the top level of a component or another hook, and they cannot be conditionally called inside loops or functions.

---

### Example 2: Creating a `useToggle` Custom Hook

Let’s create a simple `useToggle` hook to toggle a boolean value.

#### 1. Create the Custom Hook

```javascript
import { useState } from "react";

// Step 1: Create the useToggle custom hook
export function useToggle(initialValue = false) {
  // Step 2: Define a state for toggle
  const [value, setValue] = useState(initialValue);

  // Step 3: Function to toggle the value
  const toggle = () => {
    setValue(prevValue => !prevValue);
  };

  // Step 4: Return the state and the toggle function
  return [value, toggle];
}
```

#### 2. Use the Custom Hook in a Component

```javascript
import React from "react";
import { useToggle } from "./useToggle";

export default function ToggleComponent() {
  // Step 5: Use the useToggle custom hook
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {/* Step 6: Conditionally render content */}
      {isVisible && <p>This is the content that can be toggled.</p>}
    </div>
  );
}
```

### Explanation:

1. **Create the Custom Hook (`useToggle`)**:
   - `useToggle` manages a boolean state and provides a toggle function to flip the state between `true` and `false`.

2. **Using the Custom Hook in a Component**:
   - The `ToggleComponent` uses the `useToggle` hook to manage whether the content is visible or hidden.
   - The button’s text changes based on the state, and clicking the button toggles the visibility of the content.

---

### Summary:

- **Custom Hooks** encapsulate reusable logic that can be shared across components, making your code more modular and maintainable.
- They allow you to share logic without compromising the state or lifecycle of the components using them.
- By following the rules of hooks and encapsulating stateful logic, custom hooks help you keep components clean and reusable.

Custom hooks provide a powerful way to reduce code duplication and manage complex logic in a reusable, scalable way.