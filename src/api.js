import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const GetPersonajes = async () => {
    const url = '/character';
    const {data} = await instance.get(url);
    return data.results;
}

