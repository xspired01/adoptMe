## Notes on Hooks

Hooks are basically an easier way to "hook" into state. Hooks are functions that take in one argument which is default state and return a "slice" of state and a function that updates that slice (very BASIC concept). Since hooks are not class components, there is no need to use a constructor function, super, set intial state, or bind methods. So there is less writing and faster to setup and use.

Hooks MUST be used in a React component, they cannot be used in a regular JavaScript component, nor can they be used in any conditionals like an 'if' loop or 'for' statement. The reason hooks cannot be used in conditionals is how React keeps track of hooks and state. Hooks are tracked by the order of their creation, if hooks are inside conditionals, they might be called in a different order than their creation and will "hook" into the wrong piece of state. If conditionals must be used, the preferred pattern is to place conditional statements INSIDE the hook.

The most commonly used hooks are useState and useEffect. Less frequently used hooks might be useRef or useCustomHookName. All hooks must start with the word 'use' and hooks are backwards compatible with older versions of React.

### Sample Hook example from docs

```
import React, { useState } from 'react';

function Example(){
    const [count, setCount ] = useState(0);

    return (
        <div>
            <p>Clicked on count {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click to Increment
            </button>
        </div>
    );
}

```
