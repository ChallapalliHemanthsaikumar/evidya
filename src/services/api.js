import axios from "axios";


const request = () => {
    let name = "ISBN:9780980200447"

 return axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json").then(response => {
     
   return response.data[name]
});
}

export default request;