import { useTraficLight } from "./hooks/useTraficLight";

export const TrafficLightEffect = () => {

    const { activeLight, counterDown, colors, 
        percentage, highlightGreen, highlightYellow, highlightRed } = useTraficLight();

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">
            <h1 className="text-2xl font-bold text-white">Useffect</h1>
            <h3 className="text-white">Contador: {counterDown}</h3>

            <div className='w-64 bg-gray-700 rounded-full h-2'>
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                    style={{width: `${ percentage }%`}}>
                </div>
            </div>
            
            <div className={`w-32 h-32 ${highlightYellow} rounded-full`}></div>
            <div className={`w-32 h-32 ${highlightGreen} rounded-full`}></div>
            <div className={`w-32 h-32 ${highlightRed} rounded-full`}></div>

        </div>
    </div>
    );
};