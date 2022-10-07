import { useState } from "react";

const CounterIndex = () => {
    const [counter, setCounter] = useState(0)
    return(
        <div>
            <button onClick={() =>setCounter(counter+1)}>incrementar</button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}

export default CounterIndex;