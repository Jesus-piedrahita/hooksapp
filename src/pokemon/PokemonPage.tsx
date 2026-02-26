import { useCounter } from "./hooks/useCounter";
import { useQueryApiGet } from "./hooks/useQueryApiGet";

export const PokemonPage = () => {

  const {counter, increment, decrement} = useCounter({id: 1});
  const {data} = useQueryApiGet({id: counter});


  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{counter} {data?.name}</h3>
      <img
        src={data?.image}
        alt=""
      />

      <div className="flex gap-2">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={decrement}>
          Anterior
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={increment}>
          Siguiente
        </button>
       
      </div>
    </div>
  );
};