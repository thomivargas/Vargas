import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"

const CardPersonajes = ({personaje}) => {
  const { handleMostarModal } = useContext(PersonajesContext)

  return (
    <div key={personaje.id} className='hover:scale-125 duration-300 cursor-pointer' onClick={() => handleMostarModal(personaje)}>
        <img src={personaje.image} className='w-64 lg:w-80 h-64 lg:h-80 object-cover hover:rounded-xl' alt={personaje.name}/>
    </div>
  )
}

export default CardPersonajes
