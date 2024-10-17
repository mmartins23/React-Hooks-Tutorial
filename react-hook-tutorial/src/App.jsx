import './App.css'
import HookCounterOne from './components/HookCounterOne';
import HookUseState from './components/HookUseState'
import HookUseStateArray from './components/HookUseStateArray';
import HookUseObject from './components/HookUseStateObject';

function App() {

  return (
    <>
      <HookUseState />
      <HookUseObject />
      <HookUseStateArray />
      <HookCounterOne/>
    </>
  )
}

export default App;
