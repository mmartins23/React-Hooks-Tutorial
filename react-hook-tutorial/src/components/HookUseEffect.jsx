import { useState, useEffect } from "react";

export default function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect hook with conditional execution
  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if 'count' changes

  // useEffect with cleanup
  useEffect(() => {
    // Effect logic here (e.g., API call, subscription)
    console.log('Effect runs only once, on component mount');
  
    // cleanup function
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);  // Empty array means the effect will run only on mount
  
  return (
    <div>
      <h2>useEffect after render</h2>
      {/* Input field to update the 'name' state */}
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      {/* Button to increment the 'count' state */}
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  );
}