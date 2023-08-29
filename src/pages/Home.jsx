import { GetPersonajes } from '../api'
import { useState, useEffect } from 'react'

const Home = () => {
  const [ personajes, setPersonajes ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPersonajes();
        setPersonajes(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(personajes)

  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home
