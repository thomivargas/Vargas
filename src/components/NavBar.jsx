import { Link } from 'react-router-dom'
import RyM from '../assets/RyM.png'
import { useContext } from 'react'
import { PersonajesContext } from '../context/PersonajesContext'

const NavBar = () => {
    const { 
        autenticado, 
        usuario, 
        setAutenticado, 
        setUsuario, 
        setPassword,
        setPage,
        setPageEpisodios
      } = useContext(PersonajesContext);

  return (
    <nav className='flex flex-col md:flex-row px-16 items-center justify-between'>
        <img src={RyM} className='w-72 h-28' alt="logo" />
        <ul className={`flex justify-center text-center pt-5 gap-16 md:gap-6 w-56}`}>
            <div className='flex flex-col md:flex-row gap-6'>
              <Link className='hover:text-sky-500 hover:underline' to={'/'} onClick={() => {
                setPageEpisodios(1)
              }}>Personajes</Link>
              <Link className='hover:text-sky-500 hover:underline' to={'/episodios'} onClick={() => {
                setPage(1)
              }}>Episodios</Link>
            </div>
            { autenticado ?
            <div className='flex flex-col md:flex-row gap-6'>
              <p className='hover:text-sky-500 hover:underline'>{usuario}</p>
              <Link className='hover:text-sky-500 hover:underline' to={'/login'} onClick={() => {
                setAutenticado(false)
                setUsuario('')
                setPassword('')
              }}>Cerrar Sesion</Link>
            </div> :
              <Link className='hover:text-sky-500 hover:underline' to={'/login'}>Iniciar Sesion</Link>
            }
        </ul>
    </nav>
  )
}

export default NavBar
