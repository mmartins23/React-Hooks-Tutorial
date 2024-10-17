import  { useContext } from 'react';
import MyContext from '../context/MyContext';

const ComponentF = () => {
  // Access the context value using the useContext hook
  const data = useContext(MyContext);

  return (
    <div>
      <h4>Component F</h4>
      <p>Data received: {data}</p>
    </div>
  );
}

export default ComponentF;
