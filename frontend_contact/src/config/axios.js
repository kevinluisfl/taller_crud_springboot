import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:9090/'
});

export default clienteAxios;