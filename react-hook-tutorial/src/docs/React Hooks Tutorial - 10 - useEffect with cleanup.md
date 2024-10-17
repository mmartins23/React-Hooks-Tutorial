### Study Guide: **Run Effects Only Once in React**

#### **What Does it Mean to Run Effects Only Once?**
In React, by default, the `useEffect` hook runs **after every render**. However, if you want an effect to run **only once**—for example, when the component **mounts**—you can achieve this by passing an **empty dependency array `[]`** to the `useEffect` hook.

This is a common pattern for actions like:
- **Fetching data** from an API when the component first loads.
- **Subscribing** to a WebSocket or event listener.
- **Setting up timers** or intervals.
- Running any other effect that should occur **once** when the component initializes.

#### **How to Run an Effect Only Once**

To ensure an effect runs only once, pass an empty array as the second argument to `useEffect`:

```javascript
useEffect(() => {
  // Effect logic here (e.g., API call, subscription)
  console.log('Effect runs only once, on component mount');

  // Optional cleanup function
  return () => {
    console.log('Cleanup on unmount');
  };
}, []);  // Empty array means the effect will run only on mount
```

- **Effect Runs Once**: The effect in the above example runs only when the component **mounts**.
- **Optional Cleanup**: The `useEffect` hook can return a cleanup function. This function will run when the component **unmounts** (useful for cleaning up subscriptions or timers).

---

### **Examples of Running Effects Once**

1. **Fetching Data on Component Mount**
   - Example: Fetching user data from an API when the component first loads.
   ```javascript
   useEffect(() => {
     fetch('https://api.example.com/user')
       .then(response => response.json())
       .then(data => console.log(data));
   }, []);  // Runs only once on mount
   ```

2. **Subscribing to an Event on Mount**
   - Example: Setting up an event listener when the component mounts and cleaning it up on unmount.
   ```javascript
   useEffect(() => {
     const handleResize = () => console.log('Window resized');
     window.addEventListener('resize', handleResize);

     // Cleanup event listener on unmount
     return () => window.removeEventListener('resize', handleResize);
   }, []);  // Runs only once on mount
   ```

3. **Starting a Timer**
   - Example: Starting a timer when the component mounts and clearing it on unmount.
   ```javascript
   useEffect(() => {
     const timer = setInterval(() => {
       console.log('Timer tick');
     }, 1000);

     // Clear the timer on unmount
     return () => clearInterval(timer);
   }, []);  // Timer starts on mount and is cleared on unmount
   ```

---

### **Explanation of Key Points**

1. **Dependency Array `[]`**:
   - When you pass an empty array `[]`, the effect is instructed to run **only once**, after the initial render. This mimics the behavior of a component’s "componentDidMount" lifecycle method.

2. **Cleanup Function**:
   - If your effect involves something that needs to be cleaned up (like a subscription or timer), return a **cleanup function** from `useEffect`. This function will run when the component **unmounts**, preventing memory leaks or unintended behavior.

3. **Use Case**: 
   - Running an effect only once is useful for actions that should occur **on initial load** but not after every re-render. Typical examples include:
     - Fetching data when a component first renders.
     - Setting up event listeners or subscriptions.
     - Running initialization logic (e.g., setting up a timer or performing side-effect operations).

---

### **Common Pitfalls**

- **Omitting the Dependency Array**: If you forget to pass an empty array, the effect will run **after every render**, which may lead to performance issues or unintended behavior.
- **Not Cleaning Up**: If you are using side effects like event listeners, WebSocket connections, or timers, always ensure to clean them up in the **cleanup function** to avoid memory leaks.

---

### **Conclusion**
By passing an empty dependency array to `useEffect`, you can make sure the effect only runs once—when the component mounts. This pattern is critical for initializing state, subscribing to external data sources, and performing setup logic that should only happen on the initial render. Always remember to clean up any resources to ensure your component works efficiently.