import axios from 'axios';

export const baseURL = 'https://api.black-carbons.com/api/v1'
const api = axios.create({
	baseURL: baseURL
});


export default api;
