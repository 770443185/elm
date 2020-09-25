import axios from 'axios';
const http=axios.create({
    // baseURL:'https://elm.cangdu.org/api/'
    baseURL:'http://localhost:8080/api'
})
http.interceptors.response.use(res=>{
    try{
        return res.data
    }catch(err){
        Promise.reject(err)
    }
})
export default http