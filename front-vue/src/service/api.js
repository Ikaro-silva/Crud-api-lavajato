//conecção com o axios 

import axios from 'axios'
export default()=>axios.create({
    baseURL:'http://localhost:8080/api'
})