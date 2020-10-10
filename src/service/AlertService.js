import { toast } from 'react-toastify';

export const AlertService = {
    info: function (value) {

        toast.info(value);
    },

    success: function (value) {

        toast.success(value);
    },

    error: function (value) {

        toast.error(value);
    }
};

export default AlertService


/*
const ValidationService () {
    //https://www.freakyjolly.com/react-toast-notifications-using-toastify/#.X1eFaueg_IU
    const info = ({ message }) => {
        //toast("I am Tostify!");
        toast.info(message);
    };

    const error = ({ message }) => {

        toast.error(message);
    };

    const success = ({ message }) => {

        toast.success(message);
    };


}
export default ValidationService;*/
