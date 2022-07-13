import axios from "axios";
import { urls } from "../../urls";


const loginService = async (username, password) => {
    let loggedInUser;
    var isError = false;

    const config = {
        headers: {
            Authorization: getToken(username, password)
        }
    };

    await axios.get(`${urls.springUrl}/username`, config).then((response) => {
        sessionStorage.setItem("token", getToken(username, password));
        loggedInUser = response.data.username;
        isError = false;
    }).catch((error) => {
        loggedInUser = null;
        isError = error.message;
        sessionStorage.removeItem("token");
    })

    return ({ loggedInUser, isError });
}


function getToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
}

export default loginService;