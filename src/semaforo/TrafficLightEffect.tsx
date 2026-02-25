import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
    pink: 'bg-pink-500 animate-pulse',
    violet: 'bg-violet-500 animate-pulse',
}

type highlightColors = keyof typeof colors ;

export const TrafficLightEffect = () => {

    const [activeLight, setActiveLight] = useState<highlightColors>('red');
    const [counterDown, setcounterDown] = useState(10);

    useEffect(() => {
        if (counterDown === 0) return;
        
        const intervalId = setInterval(() => {
            setcounterDown((prev) => prev - 1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        };

    }, [counterDown]);  

 

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
            <h1 className="text-2xl font-bold text-white">Useffect</h1>
            <h3 className="text-white">Contador: {counterDown}</h3>
            
            <div className={`w-32 h-32 ${activeLight === 'red'? colors[activeLight] : 'bg-gray-500'} rounded-full`}></div>
            <div className={`w-32 h-32 ${activeLight === 'yellow'? colors[activeLight] : 'bg-gray-500' } rounded-full`}></div>
            <div className={`w-32 h-32 ${activeLight === 'green'? colors[activeLight] : 'bg-gray-500' } rounded-full`}></div>

        </div>
    </div>
    );
};