import axios from "axios";

const API = axios.create({ 
    baseURL: 'https://dummy.restapiexample.com/'
});


export const getEmployees = () => API.get("/api/v1/employees", { crossdomain: true })

// export const getEmployees = async() => {
//     const response =  await fetch(`http://dummy.restapiexample.com//api/v1/employees`,{
//         method: 'GET'
//     }
//     );
//     return response.json();
// }