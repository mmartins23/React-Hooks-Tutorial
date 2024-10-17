### Study Guide: **Conditionally Running Effects in React**

#### **What is a Conditional Effect?**
In React, using the `useEffect` hook allows you to **conditionally run side effects** after renders. By specifying **dependencies** in the dependency array, you can control *when* the effect should run based on changes to specific state or props.

#### **Basic Concept of Conditional Effects**
`useEffect` without dependencies runs after **every render**. By adding dependencies, you can condition the effect to run only when those specific values change.

#### **Syntax for Conditional Effects:**
```javascript
useEffect(() => {
  // Side effect logic
}, [dependency1, dependency2, ...]);
```

- The side effect will run **only if** one or more of the specified dependencies change between renders.
- If the dependency array is **empty `[]`**, the effect will run **only once** after the initial render (also known as *on mount*).

---

### **Examples of Conditionally Running Effects**

1. **Run Effect Only on State Change**:
   - This is useful when you want the effect to trigger only when specific state values change.
   - Example:
     ```javascript
     import React, { useState, useEffect } from 'react';

     function Counter() {
       const [count, setCount] = useState(0);

       useEffect(() => {
         console.log('Count has changed');
       }, [count]);  // Runs only when 'count' changes

       return (
         <div>
           <p>Count: {count}</p>
           <button onClick={() => setCount(count + 1)}>Increment</button>
         </div>
       );
     }
     ```

2. **Run Effect on Prop Change**:
   - `useEffect` can also conditionally run when a **prop** changes.
   - Example:
     ```javascript
     function Profile({ userId }) {
       useEffect(() => {
         // Fetch user data whenever userId changes
         fetchUserData(userId);
       }, [userId]);  // Effect runs only when the userId prop changes

       return <div>Profile for User: {userId}</div>;
     }
     ```

3. **Run Effect Only Once (On Mount)**:
   - By passing an **empty array `[]`** as the dependency, the effect will only run **once** when the component mounts.
   - Example:
     ```javascript
     useEffect(() => {
       console.log('This runs only once, after the first render');
     }, []);  // Empty array means this runs only on mount
     ```

4. **Multiple Dependencies**:
   - You can specify **multiple dependencies** in the array, and the effect will run whenever any of them change.
   - Example:
     ```javascript
     useEffect(() => {
       console.log('Effect runs when either count or userName changes');
     }, [count, userName]);  // Effect runs if 'count' or 'userName' changes
     ```

---

### **How Dependencies Work**
- **Single Dependency**: The effect runs when the specific state/prop changes.
- **Multiple Dependencies**: The effect runs when **any one** of the listed dependencies changes.
- **Empty Array `[]`**: The effect runs only once, after the initial render.

#### **Deep Comparison of Dependencies**
React does a **shallow comparison** of dependencies. This means if you pass an object or array as a dependency, `useEffect` will trigger if the reference to the object or array changes, even if the contents are the same.

Example:
```javascript
useEffect(() => {
  console.log('Effect runs when obj changes');
}, [obj]);  // Runs even if the contents are the same but reference changes
```

To avoid unnecessary rerenders with complex dependencies, consider memoization (e.g., `useMemo` or `useCallback`).

---

### **Practical Use Cases**

1. **Fetching Data on State Change**:
   - Example: Only fetch data when the `searchQuery` changes.
   ```javascript
   useEffect(() => {
     fetchData(searchQuery);
   }, [searchQuery]);  // Fetches data only when 'searchQuery' changes
   ```

2. **Subscribing to an Event**:
   - Example: Subscribing to a WebSocket when the component mounts.
   ```javascript
   useEffect(() => {
     const socket = new WebSocket('ws://example.com');
     socket.onmessage = handleMessage;

     return () => socket.close();  // Cleanup the WebSocket on unmount
   }, []);  // Runs only once on mount
   ```

3. **Effect Based on Multiple State Changes**:
   - Example: Trigger an effect if either `userId` or `status` changes.
   ```javascript
   useEffect(() => {
     console.log(`User or status changed: ${userId}, ${status}`);
   }, [userId, status]);  // Effect runs when either 'userId' or 'status' changes
   ```

---

### **Important Considerations**

- **Avoid overusing conditional effects**: Be mindful of performance, as excessive or unnecessary rerenders can slow down your app.
- **Always include necessary dependencies**: Omitting dependencies can cause bugs when state or props change without re-running the effect.
- **Ensure proper cleanup**: When using side effects like subscriptions or timers, ensure you clean them up to prevent memory leaks or unwanted behavior.

---

### **Conclusion**
Conditionally running effects with `useEffect` allows you to fine-tune how your component behaves in response to changes. By carefully managing dependencies, you can ensure that effects run only when needed, improving both performance and predictability in your React applications.