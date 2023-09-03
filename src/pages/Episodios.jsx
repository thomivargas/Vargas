import { useContext } from "react"
import { PersonajesContext } from "../context/PersonajesContext"
import NavBar from "../components/NavBar"
import CardEpisodios from "../components/CardEpisodios"
import PaginacionEpisodios from "../components/PaginacionEpisodios"
import Spinner from "../components/spinner/Spinner"

const Episodios = () => {
    const { episodios, loading } = useContext(PersonajesContext)

  return (
    <div className="text-xl">
        <NavBar/>
        <PaginacionEpisodios/>
        { loading ? <Spinner/> : (
          <div className="w-full px-16 flex flex-col my-10 gap-16">
              { episodios.map( episodio => (
                  <CardEpisodios episodio={episodio} key={episodio.id}/>
              ))}
          </div>
        )}
    </div>
  )
}

export default Episodios
