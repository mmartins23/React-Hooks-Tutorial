import { useState } from 'react';
import MyContext from '../context/MyContext';  // Import the context we created
import ComponentD from './ComponentD.jsx';

const ComponentC = () => {
  // The data we want to pass down
  const [data] = useState("Hello from Component C");

  return (
    // Wrap ComponentD (and all its children) with the Provider
    <MyContext.Provider value={data}>
    <h2>Use Context Example passing data</h2>
      <h2>Component C</h2>
      <ComponentD />
    </MyContext.Provider>
  );
}

export default ComponentC;
