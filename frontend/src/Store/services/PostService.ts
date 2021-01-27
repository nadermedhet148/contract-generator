import axios from 'axios';

const post = (url  : string , data , headers)=>{
    return axios.post(url , data , {
        headers : headers,
    })
}

export default post;



