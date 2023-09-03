import RickAndMorty from '../assets/RickAndMorty.mp4'
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'

const Login = () => {

  return (
    <div className='w-full h-screen flex flex-col xl:flex-row'>
      <aside className='h-1/2 xl:h-full xl:w-1/4 flex flex-col justify-center px-10 text-4xl'>
        <Link to={'/'} className='mb-10 text-center cursor-pointer hover:text-sky-500 hover:underline'>Rick and Morty API</Link>
        <FormLogin/>
      </aside>
      <main className='relative h-1/2 xl:h-full xl:w-3/4'>
        <video className='bg-center absolute top-0 left-0 w-full h-full object-cover z-0'autoPlay muted loop>
          <source src={RickAndMorty} type='video/mp4'/>
        </video>
      </main>
    </div>
  )
}

export default Login
