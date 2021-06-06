import axios from 'axios';

const Axios = (type, path, header, data, otherUrl) => {
   const baseUrl = 'http://localhost:8081/';

   return axios ({ 
       method : type, 
       url : otherUrl ? otherUrl : baseUrl + path,
       header : header ? header : {
        "Content-Type": 'application/json',
        "X-Requested-With": "XMLHttpRequest",
       },
       data
   }).then((data) => {
       return data;
   }).catch((err) => {
       return err.response;
   })
}

export default Axios;
