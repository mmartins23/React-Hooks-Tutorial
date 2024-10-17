import { useState } from 'react';

function HookUseObject() {
    // Initialize state with an object
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <h2>Hook UseState Object Example:</h2>
            <hr/>
            <form>
                {/* Input for first name */}
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                    placeholder="First Name"
                />

                {/* Input for last name */}
                <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    placeholder="Last Name"
                />
            </form>

            {/* Display the current state */}
            <h2>Your First Name is: {name.firstName}</h2>
            <h2>Your Last Name is: {name.lastName}</h2>
        </div>
    );
}

export default HookUseObject;
