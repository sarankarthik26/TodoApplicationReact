import axios from "axios";
import { urls } from "./urls";

const config = {
    headers: {
        Authorization: sessionStorage.getItem("token")
    }
};

export const getter = (url, setData, setError, setShowData) => {
    config.headers.Authorization = sessionStorage.getItem("token");

    axios.get(urls.springUrl + url, config).then(res => {
        setData(res.data);
        setShowData(res.data);
        setError(null);
    }).catch(err => {
        setData(null);
        setShowData(null);
        setError(err);
    })
}

export const patcher = (url, payload) => {
    axios.patch(urls.springUrl + url, payload, config);
}

export const deleter = (url) => {
    axios.delete(urls.springUrl + url, config);
}

