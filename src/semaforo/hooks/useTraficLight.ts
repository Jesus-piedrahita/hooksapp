import { useState, useEffect } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
    pink: 'bg-pink-500 animate-pulse',
    violet: 'bg-violet-500 animate-pulse',
}

type highlightColors = keyof typeof colors ;

export function useTraficLight() {

    const [activeLight, setActiveLight] = useState<highlightColors>('red');
    const [counterDown, setcounterDown] = useState(5);


    useEffect(() => {
        if (counterDown === -1) return;

        const intervalId = setInterval(() => {
            console.log(counterDown);
            setcounterDown((prev) => prev - 1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        };

    }, [counterDown]);  


    useEffect(() => {
        
        if (counterDown > 0) return;
        setcounterDown(5);
        
        if (activeLight === 'red') {
            setActiveLight('green');
            return;
        }  
        
        if (activeLight === 'green') {
            setActiveLight('yellow');
            return;
        }
            
        if (activeLight === 'yellow') {
            setActiveLight('red');
            return;
        }
            
    }, [counterDown, activeLight])


    return { 
        // props
        activeLight, counterDown, colors, 

        //computed
        percentage: (counterDown / 5) * 100,
        highlightRed: activeLight === 'red' ? colors.green : 'bg-gray-500',
        highlightYellow: activeLight === 'yellow' ? colors.red : 'bg-gray-500',
        highlightGreen: activeLight === 'green' ? colors.yellow : 'bg-gray-500',

    
    };
}
