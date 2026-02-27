import { useState } from "react";

interface CounterHook {
    // properties
    id: number;
}

export function useCounter({id}: CounterHook) {
    const [counter, setCounter] = useState(id);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter <= 1) return;
        setCounter(counter - 1);
    }

    return {
        // properties
        counter,

        // methods
        increment,
        decrement
    };
}

