import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"


const Paginacion = () => {
    const { pageEpisodios, pageTotalEpisodios, setPageEpisodios } = useContext(PersonajesContext)

  return (
    <div className='flex justify-center items-center gap-5 pt-5'>
        <button className={`p-2 text-sky-600 hover:text-sky-300`} onClick={() => setPageEpisodios(pageEpisodios - 1)} disabled={pageEpisodios === 1}>
            Prev
        </button>
        <span>{pageEpisodios}</span>
        <button className='p-2 text-sky-600 hover:text-sky-300' onClick={() => setPageEpisodios(pageEpisodios + 1)} disabled={pageEpisodios === pageTotalEpisodios}>
            Next
        </button>
    </div>
  )
}

export default Paginacion