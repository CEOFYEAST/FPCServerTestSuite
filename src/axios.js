import axios  from 'axios'
const link = 'http://localhost:3000';
export default axios.create({
    baseURL: link
});