import { useState } from 'react';

function HookUseStateArray() {
    // Initialize state with an array
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    };

    return (
        <div>
            <h2>Hook UseState Array Example:</h2>
            <hr />
            <button onClick={addItem}>Add a Number</button>

            {/* Display the array elements */}
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookUseStateArray;
