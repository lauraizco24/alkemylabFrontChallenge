import axios from 'axios'
import { config } from "../../constants/index";
import { AlertService } from "../../service/AlertService"
import set from 'lodash/set';
import { AuthenticationService } from "../../service/AuthenticationService"

//API Rest principal de nuestra aplicacion
//En esta api rest se injecta el JWT y el error interceptor
const restAPI = axios.create({
    baseURL: config.url.API_BASE_URL
})

//ejemplo cliente api spotify
// const spotifyAPI = axios.create({
//     baseURL: "http://api.spotify"
// })

//interceptor para el momendo de enviar UN request
restAPI.interceptors.request.use((config) => {
    // obtengo el usuario en el localStorage
    let currentUser = AuthenticationService.currentUser();
    
    //si hay user, le pongo el token
    if (currentUser && currentUser.token) {
        set(config, 'headers.token', currentUser.token);
    }

    return config;
});

// Error Interceptor!(y 401)
//Interceptor de Respuestas
restAPI.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);

    //Tiro Cartelito
    AlertService.error(error.response.data.message === '' ? error.response.data.error : error.response.data.message);

    if (error.response.status === 401) {

        // si estoy autenticado, hago logout despues de la llamada a la API
        // y navego al home(o a la ruta login si hay, aca es un dialog)
        if (AuthenticationService.isAuthenticated()) {
            AuthenticationService.logout();
            window.location = '/';
            //window.location.reload(true);
            
        }
        return Promise.reject(error);
    } else {

        return Promise.reject(error);
    }
});

export { restAPI }