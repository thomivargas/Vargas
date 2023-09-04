import { useContext } from 'react'
import { PersonajesContext } from '../context/PersonajesContext'
import PersonajeModal from '../components/personajeModal'
import NavBar from '../components/NavBar';
import CardPersonajes from '../components/CardPersonajes';
import Paginacion from '../components/Paginacion';
import Spinner from '../components/spinner/Spinner'

const Home = () => {
  const { personajes, modal, loading, setNamePersonaje, setPage } = useContext(PersonajesContext);
  
  return (
    <>
      <div className='w-full text-xl'>
        {/* Navegacion */}
        <NavBar/>
        
        <div className='flex flex-col md:flex-row items-center md:justify-around md:gap-96 my-12'>
          {/* Buscardor */}
          <input 
            onChange={e => {
              setNamePersonaje(e.target.value)
              if(e.target.value === ''){
                setPage(1)
              }
            }} 
            type='text' 
            placeholder='buscar personajes'
            className='px-4 w-72 py-2 rounded-lg uppercase'
          />

          {/** Paginacion */}
          <Paginacion/>
        </div>

        {/* Personajes */}
        { loading ? <Spinner/> : (
          <div className='w-full flex justify-center gap-12 md:gap-0 flex-wrap my-12'>
            { personajes.map(personaje => (
              <CardPersonajes personaje={personaje} key={personaje.id} />
            ))}
          </div>
        )}
      </div>
      {/* Modal */}
      { modal && <PersonajeModal/>}
    </>
  )
}

export default Home
