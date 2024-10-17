import './App.css'
import HookUseEffect from './components/HookUseEffect';
import HookUseState from './components/HookUseState'
import HookUseStateArray from './components/HookUseStateArray';
import HookUseObject from './components/HookUseStateObject';

function App() {

  return (
    <>
      <HookUseState />
      <HookUseObject />
      <HookUseStateArray />
      <HookUseEffect/>
    </>
  )
}

export default App;
