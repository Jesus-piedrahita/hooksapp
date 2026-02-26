import { useState } from "react";

interface counterHook {
    // properties
    id: number;
}

export function useCounter({id}: counterHook) {
    const [counter, setCounter] = useState(id);

    const increment = () => {
        setCounter(prev => prev + 1);
    }

    const decrement = () => {
        if (counter <= 1) return;
        setCounter(prev => prev - 1);
    }

    return {
        // properties
        counter,

        // methods
        increment,
        decrement
    };
}

