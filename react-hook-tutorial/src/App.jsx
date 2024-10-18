import './App.css'
import HookUseEffect2 from './components/HookUseEffect2';
import HookUseEffect from './components/HookUseEffect';
import HookUseState from './components/HookUseState'
import HookUseStateArray from './components/HookUseStateArray';
import HookUseObject from './components/HookUseStateObject';
import ComponentC from './components/ComponentC';
import HookUseReducer from './components/HookUseReducer';
import HookUseMemo from './components/HookUseMemo';
import HookUseCallback from './components/HookUseCallback';
import FocusInput from './components/FocusInput';

function App() {

  return (
    <>
      {/* <HookUseState />
      <HookUseObject />
      <HookUseStateArray />
      <HookUseEffect/>
      <HookUseEffect2/>
      <ComponentC/>
      <HookUseReducer/> */}
      <HookUseMemo/>
      <HookUseCallback/>
      <FocusInput/>
    </>
  )
}

export default App;
