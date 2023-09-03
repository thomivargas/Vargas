import { useContext } from "react";
import { PersonajesContext } from "../context/PersonajesContext";

const PersonajeModal = () => {
    const { personajeModal, handleMostarModal } = useContext(PersonajesContext);
    const { image, name, status, species, location } = personajeModal;
    
    const estadoPersonaje = (status) => {
        let clase = '';
        switch (status) {
            case 'Alive':
                clase = 'bg-green-500';
                break;
            case 'Dead':
                clase = 'bg-red-500'
                break;
            case 'unknown': 
                clase = 'bg-gray-400'   
                break;
        }
        return clase
    }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg relative">
            <span className="absolute top-1 right-4 text-3xl font-bold text-black md:text-white cursor-pointer" onClick={handleMostarModal}>X</span>
            <div className="flex overflow-hidden">

                { <div className="flex flex-col overflow-hidden md:flex-row">
                    <img src={image} className="w-full md:w-60"alt={name} />
                    <div className="px-3 py-8 md:w-80">
                        <h1 className="font-bold text-3xl">{name}</h1>
                        <div className="text-xl mt-3">

                            <div className="pt-2 flex gap-2 items-center">
                                <div className={`h-2 w-2 rounded-full ${estadoPersonaje(status)}`}></div> 
                                <p>{status} - {species}</p>
                            </div>

                            <p className="text-gray-500 pt-1">Última ubicación conocida:</p>
                            <p className="px-2">{location.name}</p>

                        </div>

                    </div>
                </div> }

            </div>
        </div>
    </div>
  )
}

export default PersonajeModal
