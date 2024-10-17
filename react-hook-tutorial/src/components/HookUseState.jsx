import { useState } from "react";

export default function HookUseState() {
    const [count, setCount] = useState(0);

    return (

        <div>
            <h2>UseState Example:</h2>
            <hr/>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}
