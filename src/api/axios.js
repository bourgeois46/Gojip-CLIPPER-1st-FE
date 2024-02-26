import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://52.78.207.235:8080', // API 서버 주소
    headers: {
    
    },
});

export default instance;