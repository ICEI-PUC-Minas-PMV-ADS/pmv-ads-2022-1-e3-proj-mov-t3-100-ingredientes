import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';
export const BASE_URL_AUTH = 'http://localhost:3000/660';

const API = axios.create();

export default API;