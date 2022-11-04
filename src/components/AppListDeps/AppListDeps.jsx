import { useState } from "react";

export const AppListDeps = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    // useEffect(
    //     () => {console.log(firstValue + secondValue)}, [firstValue, secondValue]
    // );

    return (
        <>
            <button type="button" onClick={() => setFirstValue(firstValue + 1)}>First: { firstValue}</button>
            <button type="button" onClick={() => setSecondValue(secondValue + 1)}>Second: { secondValue}</button>
        </>
    );
}