import axios from "axios";
import { urls } from "../../urls";

const loginService = async (username, password) => {
    let isAuthenticated;
    var isError = false;

    const config = {
        headers: {
            Authorization: getToken(username, password)
        }
    };

    try {
        await axios.get(`${urls.springUrl}/username`, config);
        localStorage.setItem("token", getToken(username, password));
        isAuthenticated = true;
        isError = false;
    }
    catch (error) {
        isAuthenticated = false;
        isError = true;
        localStorage.removeItem("token");
    }

    return ({isAuthenticated, isError});
}

function getToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password);
}

export default loginService;