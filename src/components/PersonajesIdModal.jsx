import { useState ,useContext } from "react";
import { PersonajesContext } from "../context/PersonajesContext";
import Spinner from "./spinner/Spinner";

const PersonajesIdModal = () => {
    const { personajesEpisodios, handleMostarModal, loadingModal } = useContext(PersonajesContext);

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black opacity-5'></div>
      {loadingModal ? (
        <Spinner />
      ) : (
        <>
          <div className='bg-gray-800 w-3/4 md:w-2/5 rounded-xl shadow-lg relative'>
            <h1 className='pt-3 pl-6'>Personajes del Episodio</h1>
            <span
              className='absolute top-0 right-0 pt-1 pr-3 cursor-pointer'
              onClick={handleMostarModal}
            >
              X
            </span>
            <div className='flex my-2 mx-4 overflow-auto'>
              <div
                className='flex gap-6 items-center'
              >
                {personajesEpisodios?.map((personaje) => (
                  <div key={personaje.id} className="flex flex-col h-52 w-28">
                    <img
                      src={personaje.image}
                      className='rounded-2xl'
                      alt={personaje.name}
                    />
                    <h2 className="text-center mt-2">{personaje.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PersonajesIdModal
