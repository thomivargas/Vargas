import { useState, useEffect } from "react";
import { createContext } from "react";
import { GetPersonajes, GetEpisodios, GetPersonaje } from '../api'

export const PersonajesContext = createContext();

const PersonajesProvider = ({children}) => {
    //login
    const [ usuario, setUsuario ] = useState('')
    const [ password, setPassword ] = useState('')

    //obtener Personajes
    const [ personajes, setPersonajes ] = useState([])
    const [ namePersonaje, setNamePersonaje ] = useState('')

    //obtener Episodios
    const [ episodios, setEpisodios ] = useState([])

    //personajes por episodios
    const [ variosPersonajes, setVariosPersonajes ] = useState([])
    const [ personajesEpisodios, setPersonajesEpisodios ] = useState([])

    //state para el login si existe un usuario autenticado
    const [ autenticado, setAutenticado ] = useState(false)

    // paginacion personajes
    const [ page, setPage ] = useState(1)
    const [ pageTotal, setPageTotal ] = useState(0)

    // paginacion episodios
    const [ pageEpisodios, setPageEpisodios ] = useState(1)
    const [ pageTotalEpisodios, setPageTotalEpisodios ] = useState(0)

    //modal para mostrar detalles del personaje 
    const [ modal, setModal ] = useState(false)
    const [ personajeModal, setPersonajeModal ] = useState({})

    //error
    const [ error, setError ] = useState({
        usuario: false,
        password: false
    })
    // state para mostrar spinner mientras se carga
    const [ loading, setLoading ] = useState(false)
    const [ loadingModal, setLoadingModal ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          try {
              setLoading(true)
              const data = await GetPersonajes(page, namePersonaje);
              setPersonajes(data.results)
              setPageTotal(data.info.pages)
          } catch (error) {
              console.log(error)
          }
          setTimeout(() => {
              setLoading(false)
          }, 500)
        }
        fetchData()
    }, [page, namePersonaje])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await GetEpisodios(pageEpisodios)
                setEpisodios(data.results)
                setPageTotalEpisodios(data.info.pages)
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
        fetchData()
    }, [pageEpisodios])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingModal(true)
                if( variosPersonajes.length > 1 ){
                    const data = await GetPersonaje(variosPersonajes)
                    setPersonajesEpisodios(data)
                }
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setLoadingModal(false)
            }, 500)
        }
        fetchData()
    }, [variosPersonajes])

    const handleMostarModal = (personaje) => {
        setModal(!modal)
        setPersonajeModal(personaje)
    }
    
    return (
        <PersonajesContext.Provider value={{
            personajes,
            setUsuario,
            setPassword,
            setError,
            usuario,
            password,
            error,
            setAutenticado,
            autenticado,
            setPage,
            page,
            pageTotal,
            setPageEpisodios,
            pageEpisodios,
            pageTotalEpisodios,
            handleMostarModal,
            modal,
            personajeModal,
            episodios,
            setVariosPersonajes,
            personajesEpisodios,
            loading,
            loadingModal,
            setNamePersonaje
        }}>
            {children}
        </PersonajesContext.Provider>
    )
}

export default PersonajesProvider