import './App.css'
import HookUseEffect2 from './components/HookUseEffect2';
import HookUseEffect from './components/HookUseEffect';
import HookUseState from './components/HookUseState'
import HookUseStateArray from './components/HookUseStateArray';
import HookUseObject from './components/HookUseStateObject';
import ComponentC from './components/ComponentC';
import HookUseReducer from './components/HookUseReducer';

function App() {

  return (
    <>
      <HookUseState />
      <HookUseObject />
      <HookUseStateArray />
      <HookUseEffect/>
      <HookUseEffect2/>
      <ComponentC/>
      <HookUseReducer/>
    </>
  )
}

export default App;
