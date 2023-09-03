import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"


const Paginacion = () => {
    const { page, pageTotal, setPage } = useContext(PersonajesContext)

  return (
    <div className='flex justify-center items-center gap-5'>
        <button className={`p-2 text-sky-600 hover:text-sky-300`} onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
        </button>
        <span>{page}</span>
        <button className='p-2 text-sky-600 hover:text-sky-300' onClick={() => setPage(page + 1)} disabled={page === pageTotal}>
            Next
        </button>
    </div>
  )
}

export default Paginacion
