import { useState } from "react";

export default function HookUseState() {
    const [count, setCount] = useState(0);

    return (

        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}
