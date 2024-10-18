import { useState, useEffect } from "react";

export default function ListNumbers({ listNumbers }) {
    const [arrayList, setArrayList] = useState([]);

    useEffect(() => {
        console.log('Component created!!');
        // Call the listNumbers function to update the arrayList
        setArrayList(listNumbers());
    }, [listNumbers]);  // Dependency on the memoized listNumbers function

    return (
        <ul>
            {arrayList.map(n => (<li key={n}>{n}</li>))}
        </ul>
    );
}
