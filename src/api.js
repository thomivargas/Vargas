import axios from "axios";
const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const GetPersonajes = async (page, namePersonaje) => {
    if( namePersonaje === ''){
        const url = `/character?page=${page}`;
        const { data } = await instance.get(url);
        return data
    } else {
        const url = `/character?page=${page}&name=${namePersonaje}`;
        const { data } = await instance.get(url)
        return data
    }
}

export const GetEpisodios = async (page) => {
    const url = `/episode?page=${page}`;
    const { data } = await instance.get(url);
    return data
}

export const GetPersonaje = async (ids) => {
    const url = `/character/${ids}`
    const { data } = await instance.get(url);
    return data
}
