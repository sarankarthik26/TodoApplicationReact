import axios from "axios";
import { urls } from "./urls";

const config = {
    headers: {
        Authorization: sessionStorage.getItem("token")
    }
};

export const fetcher = url => axios.get(url, config).then(res => res.data)

export const patcher = (url, payload) => {
    axios.patch(urls.springUrl + url, payload, config);
}

export const deleter = (url) => {
    axios.delete(urls.springUrl + url, config);
}

