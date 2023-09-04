import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"

const CardPersonajes = ({personaje}) => {
  const { handleMostarModal } = useContext(PersonajesContext)

  return (
    <div key={personaje.id} className='md:hover:scale-125 duration-300 cursor-pointer' onClick={() => handleMostarModal(personaje)}>
        <img src={personaje.image} className='w-80 rounded-full md:rounded-none h-80 object-cover md:hover:rounded-xl' alt={personaje.name}/>
    </div>
  )
}

export default CardPersonajes
