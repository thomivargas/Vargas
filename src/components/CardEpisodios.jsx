import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"
import PersonajesIdModal from "./PersonajesIdModal"
import Episodio from '../assets/Episodio.jpg'


const CardEpisodios = ({episodio}) => {
    const { setVariosPersonajes, modal, handleMostarModal } = useContext(PersonajesContext)

    const extraerId = (url) => {
        const parts = url.split('/');
        return parts.pop()
    }

    const handleClick = (personajes) => {
        const personajesIds = personajes.map( url => extraerId(url));
        setVariosPersonajes(personajesIds)
    }
    return (
        <>
            <div className="border border-gray-700 flex flex-col md:flex-row rounded-xl overflow-hidden">
                <img src={Episodio} className="w-full h-full md:w-52 md:h-80" alt={episodio.name} />
                <div className="px-6 py-10 flex flex-col gap-5 w-full">
                    <h2 className="text-4xl">Episodio {episodio.id}: "{episodio.name}"</h2>
                    <p className="text-xl">fecha de estreno: {episodio.air_date}</p>
                    <p className="text-xl">temporada: {episodio.episode}</p>
                    <button className="px-2 py-3 w-32 bg-sky-800 mt-2 rounded-lg hover:bg-sky-600" onClick={() => {
                        handleClick(episodio.characters)
                        handleMostarModal()
                    }}>
                        Personajes  
                    </button>
                </div>
            </div>
            { modal && <PersonajesIdModal />}
        </>
    )
}

export default CardEpisodios
