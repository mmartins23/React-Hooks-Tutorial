import { useState, useCallback } from "react";
import ListNumbers from "./ListNumbers";

export default function HookUseCallback() {
    const [color, setColor] = useState('blue');
    const [number, setNumber] = useState(0);

    const updateColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    }

    // Memoize the listNumbers function to prevent re-creation on every render
    const listNumbers = useCallback(() => {
        return [number - 1, number, number + 1];
    }, [number]);  // Only re-create the function if 'number' changes

    return (
        <div style={{ backgroundColor: color }}>
            <button onClick={updateColor}>Update Color</button>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <ListNumbers listNumbers={listNumbers} />
        </div>
    );
}
