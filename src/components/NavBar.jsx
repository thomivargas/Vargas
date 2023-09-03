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
        <ul className={`flex justify-center pt-5 gap-16 w-56}`}>
            <Link className='hover:text-sky-500 hover:underline' to={'/'} onClick={() => {
              setPageEpisodios(1)
            }}>Personajes</Link>
            <Link className='hover:text-sky-500 hover:underline' to={'/episodios'} onClick={() => {
              setPage(1)
            }}>Episodios</Link>
            { autenticado ?
            <>
              <p className='hover:text-sky-500 hover:underline'>{usuario}</p>
              <Link className='hover:text-sky-500 hover:underline' to={'/login'} onClick={() => {
                setAutenticado(false)
                setUsuario('')
                setPassword('')
              }}>Log Out</Link>
            </> :
              <Link className='hover:text-sky-500 hover:underline' to={'/login'}>Login</Link>
            }
        </ul>
    </nav>
  )
}

export default NavBar
