import { useContext } from 'react'
import { PersonajesContext } from '../context/PersonajesContext'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
    const { 
      usuario, 
      password, 
      error, 
      autenticado, 
      setError, 
      setUsuario, 
      setPassword, 
      setAutenticado 
    } = useContext(PersonajesContext);
    const navigate = useNavigate();    

    const handleSubmit = e => {
        e.preventDefault();
        if(!usuario.trim() & !password.trim()){
          setError({usuario: true, password: true})
        } else if(!usuario.trim()){
          setError({usuario: true})
        } else if(!password.trim()){
          setError({password: true})
        } else{
          console.log('usuario:', usuario,'password:', password)
          setTimeout(() => {
            navigate('/')
            setAutenticado(!autenticado)
          }, 1000)
        }
        setTimeout(() => {
          setError(false)
        }, 1000)
    }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-10 items-center'>
        <input 
            type="text" 
            placeholder='ingresar usuario'
            className={`${error.usuario && 'border-2 border-red-500 placeholder:text-red-500'} w-full md:w-3/4 lg:w-1/2 xl:w-full p-3 rounded-xl text-2xl`}
            onChange={e => setUsuario(e.target.value)}
        />
        <input 
            type="password"
            placeholder='ingresar password'
            className={`${error.password && 'border-2 border-red-500 placeholder:text-red-500'} w-full md:w-3/4 lg:w-1/2 xl:w-full p-3 rounded-xl text-2xl`}
            onChange={e => setPassword(e.target.value)}
        />
        <input 
            type="submit" 
            value="enviar"
            className='bg-sky-500 py-3 rounded-xl text-2xl cursor-pointer  w-full md:w-3/4 lg:w-1/2 xl:w-full hover:bg-sky-600 hover:transition-colors' 
        />
    </form>
  )
}

export default FormLogin
