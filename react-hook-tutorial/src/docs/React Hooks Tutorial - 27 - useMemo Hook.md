### React Hooks Tutorial: `useMemo` Hook – Study Guide

The `useMemo` Hook in React is used to **memoize a computed value** and only recalculate it when its dependencies change. It can optimize performance by avoiding expensive calculations on every render unless necessary. This is helpful when working with components or data that don’t need to be recalculated every time a parent component renders.

#### Key Concepts:

1. **useMemo Syntax**:
   - `const memoizedValue = useMemo(() => computeValue(), [dependencies]);`
   - It returns a memoized (cached) value that is only recalculated if the dependencies change.

2. **When to use**:
   - When you have expensive calculations or computations that should only be recomputed when specific state/props change.
   - When you want to avoid unnecessary recalculations and improve performance in your React application.

---

### Step-by-Step Code Breakdown

#### 1. Initial Setup with `useState`

```javascript
import { useState, useMemo } from "react";
import ListNames from "./ListNames";

export default function HookUseMemo() {
    // useState for count (to display and increment) and names (static array of names)
    const [count, setCount] = useState(0);
    const [names] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta']);
```

- **`useState`** is used for:
  - `count`: This state tracks the number that increments every time the button is clicked.
  - `names`: This holds an array of names (`['Alpha', 'Bravo', 'Charlie', 'Delta']`) and is a static list in this case.

#### 2. Memoizing the List Rendering with `useMemo`

```javascript
    // Memoize the rendering of ListNames component
    const ListNamesNoRender = useMemo(() => {
        return <ListNames list={names}/>
    }, [names]);  // Only recalculate when 'names' changes
```

- **Why use `useMemo`?**
  - The `useMemo` hook memoizes the JSX element for the `ListNames` component.
  - The `ListNamesNoRender` component will only re-render if `names` (its dependency) changes. In this case, since `names` is static, the list rendering is cached and won’t re-render unnecessarily, even if `count` changes.

#### 3. Rendering the Parent Component

```javascript
    return (
        <div>
            <h1>UseMemo() Hook</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add 1</button>
            {/* Render memoized ListNames */}
            {ListNamesNoRender}
        </div>
    );
}
```

- **Count and Button**:
  - The button increments the `count` state on each click.
  - The `ListNamesNoRender` memoized component is rendered below the count.

---

### Child Component (`ListNames.js`)

#### 1. Rendering the List of Names

```javascript
export default function ListNames({ list }) {
    console.log('ListNames component rendered ...');
    return (
        <div>
            <ul>
                {list.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
```

- **Props and Rendering**:
  - `ListNames` receives a `list` prop, which is an array of names.
  - It maps over this list and renders each name as a list item (`<li>`).
  - **Console Log**: The `console.log` will help you see when the component is actually being rendered.

---

### Full Example of Both Components

#### Parent Component (`HookUseMemo.js`)

```javascript
import { useState, useMemo } from "react";
import ListNames from "./ListNames";

export default function HookUseMemo() {
    const [count, setCount] = useState(0);
    const [names] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta']);

    // Memoize the ListNames component
    const ListNamesNoRender = useMemo(() => {
        return <ListNames list={names} />
    }, [names]);

    return (
        <div>
            <h1>UseMemo() Hook</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add 1</button>
            {/* Render the memoized ListNames component */}
            {ListNamesNoRender}
        </div>
    );
}
```

#### Child Component (`ListNames.js`)

```javascript
export default function ListNames({ list }) {
    console.log('ListNames component rendered ...');
    return (
        <div>
            <ul>
                {list.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
```

---

### Step-by-Step Explanation:

1. **`useState` for Count and Names**:
   - In the parent component, `useState` is used to manage the `count` and hold an array of `names`. The `count` is incremented on button click, while `names` is static and doesn't change.

2. **Memoizing with `useMemo`**:
   - The `useMemo` hook is used to memoize the rendering of the `ListNames` component. Since `names` doesn’t change, React will reuse the previous result and avoid re-rendering the list component when `count` changes.
   - This improves performance by skipping unnecessary re-renders, especially for more complex or expensive components.

3. **Parent Component Rendering**:
   - The parent component renders the memoized list (`ListNamesNoRender`) and updates the `count` when the button is clicked.
   - The list of names only renders once unless `names` changes, which doesn’t happen in this example.

4. **Child Component Rendering**:
   - `ListNames` is responsible for rendering the list of names it receives from the parent.
   - The `console.log` message helps us see that the component doesn’t re-render when the `count` state changes.

---

### Benefits of `useMemo`:
- **Prevents Unnecessary Computations**: By memoizing the result of a function, React avoids recalculating the value if the dependencies don’t change.
- **Improves Performance**: Useful for optimizing expensive computations or components that don’t need to re-render unless specific values (dependencies) change.
- **Usage**: You should use `useMemo` when you notice performance bottlenecks or expensive recalculations that can be avoided.

### Summary:
- **When to use `useMemo`**: 
  - Use `useMemo` when you need to optimize performance by preventing unnecessary recalculations or re-renders of components.
  - In this example, the `ListNames` component is memoized so it doesn’t re-render unless the `names` array changes.
