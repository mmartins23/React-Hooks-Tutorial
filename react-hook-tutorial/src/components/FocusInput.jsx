import { useRef } from 'react';

export default function FocusInput() {
  // Step 1: Create a ref to attach to the input element
  const inputRef = useRef(null);

  // Step 2: Create a function to focus the input field when called
  const focusInput = () => {
    // Step 3: Use the current property of the ref to access the DOM element
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Hook Example - Focusing Input</h1>
      {/* Step 4: Attach the ref to the input field */}
      <input ref={inputRef} type="text" placeholder="Enter text" />
      {/* Step 5: Button to trigger focus on the input */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
