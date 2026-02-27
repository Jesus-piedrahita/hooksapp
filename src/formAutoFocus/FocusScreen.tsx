import { useRef } from "react";

export function FocusScreen() {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        console.log(inputRef.current?.value)
        inputRef.current?.select()
    }

    return (
        <>
            <div className="bg-gradient flex flex-col gap-4 items-center">
                <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
                <input ref={inputRef} type="text" className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Focus me!" />

                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleClick}>
                        Submit
                </button>
            </div>
        </>
    );
}
