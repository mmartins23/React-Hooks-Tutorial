import { useState, useEffect } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);

  // useEffect hook runs after every render by default
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // This effect updates the document title whenever 'count' changes
  }); // No dependency array means it runs after EVERY render

  return (
    <div>
      <h2>useEffect after render</h2>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}