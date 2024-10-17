React Hooks Tutorial - 15 - useContext Hook 

The `useContext` Hook in React provides a way to pass data through the component tree without having to manually pass props at every level. This makes it useful when you want to share data between deeply nested components, like passing data from a parent component (e.g., Component C) to a deeply nested child (e.g., Component F), without having to pass props through every intermediary component (D, E).

Let's break this down with an example where Component `C` passes data to Component `F` using `useContext`.

### 1. **Step 1: Create a Context**
First, we need to create a context that will hold the data we want to share.

```javascript
import React, { createContext, useState } from 'react';

// Create a Context object
const MyContext = createContext();

export default MyContext;
```

- **Explanation**: 
   - `createContext()` is a React function that creates a new context object. This object contains two components: `Provider` and `Consumer`. We will use `Provider` to supply the data to the component tree.

### 2. **Step 2: Wrap components with the Context Provider**
Next, we use the `Provider` to wrap the part of the component tree where we want the context to be available. In this case, Component `C` will act as the Provider and pass data to its children.

```javascript
import React, { useState } from 'react';
import MyContext from './MyContext';  // Import the context we created
import ComponentD from './ComponentD';

const ComponentC = () => {
  // The data we want to pass down
  const [data, setData] = useState("Hello from Component C");

  return (
    // Wrap ComponentD (and all its children) with the Provider
    <MyContext.Provider value={data}>
      <h2>Component C</h2>
      <ComponentD />
    </MyContext.Provider>
  );
}

export default ComponentC;
```

- **Explanation**: 
   - The `Provider` component of `MyContext` is used to wrap `ComponentD`. This means that all the components within this tree (i.e., ComponentD, ComponentE, and ComponentF) can access the context value (`data`).
   - The `value={data}` part sets the value that all the children will have access to, which is `"Hello from Component C"` in this case.

### 3. **Step 3: Access the Context in Child Components**
To access the context in any child component, we use the `useContext` Hook.

#### Component D (passing data further down)

```javascript
import React from 'react';
import ComponentE from './ComponentE';

const ComponentD = () => {
  return (
    <div>
      <h3>Component D</h3>
      <ComponentE />
    </div>
  );
}

export default ComponentD;
```

- **Explanation**: 
   - `ComponentD` doesn't use the context directly but passes control down to `ComponentE`.

#### Component E (passing data further down)

```javascript
import React from 'react';
import ComponentF from './ComponentF';

const ComponentE = () => {
  return (
    <div>
      <h3>Component E</h3>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
```

- **Explanation**: 
   - Similarly, `ComponentE` just passes control down to `ComponentF`.

### 4. **Step 4: Use the Context in the Final Component (F)**

Finally, in `ComponentF`, we can access the context value using the `useContext` hook.

```javascript
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ComponentF = () => {
  // Access the context value using the useContext hook
  const data = useContext(MyContext);

  return (
    <div>
      <h4>Component F</h4>
      <p>Data received: {data}</p>
    </div>
  );
}

export default ComponentF;
```

- **Explanation**: 
   - The `useContext(MyContext)` hook is used to access the current context value. Here, `data` will hold the value passed from `ComponentC`, which is `"Hello from Component C"`.
   - Now `ComponentF` can display this data.

### Full Component Structure

```javascript
// MyContext.js
import { createContext } from 'react';
const MyContext = createContext();
export default MyContext;
```

```javascript
// ComponentC.js
import React, { useState } from 'react';
import MyContext from './MyContext';
import ComponentD from './ComponentD';

const ComponentC = () => {
  const [data, setData] = useState("Hello from Component C");

  return (
    <MyContext.Provider value={data}>
      <h2>Component C</h2>
      <ComponentD />
    </MyContext.Provider>
  );
};

export default ComponentC;
```

```javascript
// ComponentD.js
import React from 'react';
import ComponentE from './ComponentE';

const ComponentD = () => {
  return (
    <div>
      <h3>Component D</h3>
      <ComponentE />
    </div>
  );
};

export default ComponentD;
```

```javascript
// ComponentE.js
import React from 'react';
import ComponentF from './ComponentF';

const ComponentE = () => {
  return (
    <div>
      <h3>Component E</h3>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
```

```javascript
// ComponentF.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ComponentF = () => {
  const data = useContext(MyContext);

  return (
    <div>
      <h4>Component F</h4>
      <p>Data received: {data}</p>
    </div>
  );
};

export default ComponentF;
```

### Explanation Summary:

1. **MyContext**: Holds the context object created using `createContext()`. This will be used to pass data.
2. **ComponentC**: Acts as the Provider. It wraps the children (`ComponentD`, `ComponentE`, and `ComponentF`) and supplies the context value (`data`) to them.
3. **ComponentF**: Uses `useContext(MyContext)` to receive the data from `ComponentC` and display it. No props are passed through `ComponentD` and `ComponentE`, which simplifies the structure.

This is how you can use the `useContext` hook in React to pass data from a higher-level component to a deeply nested component without "prop drilling" (passing props down manually through each intermediate component).