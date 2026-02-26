import { useEffect, useState } from "react";

interface queryApiGetHook {
    // properties
    id: number;
    name?: string;
    image?: string;
}


export function useQueryApiGet({id}: queryApiGetHook) {

    const [data, setData] = useState<queryApiGetHook | null>(null);

    const getData = async (id: number) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setData({
                id: id,
                name: data.name,
                image: data.sprites.front_default
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData(id);
    }, [id]);

    return {
        // properties
        data,

    };
}