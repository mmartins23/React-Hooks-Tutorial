import { useState, useMemo } from "react"
import ListNames from "./ListNames";

export default function HookUseMemo() {

    // useState
    const [count, setCount] = useState(0);
    const [names] = useState(['Alpha', 'Bravo', 'Charlie', 'Delta']);

    const ListNamesNoRender = useMemo(() => {
        return <ListNames list={names}/>
    }, [names])

  return (
    <div>
        <h1>UseMemo() Hook</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(prevCount => prevCount +1)}>Add 1</button>
        {/* <ListNames list={names}/> */}
        {ListNamesNoRender}
    </div>
  )
}
