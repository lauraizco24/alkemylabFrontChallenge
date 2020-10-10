

import { restAPI } from "../components/_helpers/api.calls"

export const AuthenticationService = {

    login: (user) => {
        return restAPI.post("/auth/login", user)
            .then((res) => {
                //despues de loguear ok, lo guardo en el localStorage
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                return res.data;
            }
            );
    },

    register: (user) => {
        return restAPI.post("/auth/register", user)
            .then((res) => res.data);
    },

    // limpio al currentUser del localStorage
    logout: () => {
        localStorage.removeItem('currentUser');
    },

    // checkeo si esta autenticado
    isAuthenticated: () => {
        //aca por lo pronto devuelve el current user,
        //si el token esta expirado el server nos dara un 401
        //para evitar ir al server se puede leer el token del user
        //lodearlo como JWT y revisar si esta expirado del lado del cliente.
        return AuthenticationService.currentUser() != null && AuthenticationService.currentUser() != undefined;

    },

    currentUser: () => {
        //Obtiene el current user
        let cu = localStorage.getItem('currentUser');
        if (!cu)
            return null;

        JSON.parse(cu);
    }

}