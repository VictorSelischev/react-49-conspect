import { useState } from 'react';

export const AppuseEffect = () => {
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     document.title = `You clicked ${value} times`;
    // })

    // componentDidMount
    // useEffect(() => {
    //     console.log("Mounting phase: same when componentDidMount runs");
    // }, [])

    // componentDidUpdate
    // useEffect(() => {
    //     console.log(value);
    //     console.log("Updating phase: same when componentDidUpdate runs");
    // }, [value])

    return (
        <div>
            <p>You cliked {value} times</p>
            <button type='button' onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    );
};