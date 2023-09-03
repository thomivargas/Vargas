import { useContext } from "react";
import { PersonajesContext } from "../context/PersonajesContext";
import Spinner from "./spinner/Spinner";

const PersonajesIdModal = () => {
    const { personajesEpisodios, handleMostarModal, loadingModal } = useContext(PersonajesContext);

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-black opacity-5'></div>
            { loadingModal ? <Spinner/> : (
            <>
              <div className="bg-gray-800 rounded shadow-lg relative">
                  <h1 className="pt-3 px-2">Personajes del Episodio</h1>
                  <span className="absolute top-0 right-0 px-3 cursor-pointer" onClick={handleMostarModal}>X</span>
                  <div className="flex flex-wrap gap-5 w-96 m-2 max-h-96 overflow-auto">   
                    { personajesEpisodios?.map( personaje => (
                      <div key={personaje.id} className="">
                        <img src={personaje.image} width={100} height={100} className="rounded-full" alt={personaje.name} />
                      </div>
                    ))}
                  </div>
              </div>
            </>
            )}
      </div>
    </>
  )
}

export default PersonajesIdModal
