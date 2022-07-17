import { urls } from "./urls"

const config = {
    headers: {
        Authorization: sessionStorage.getItem("token")
    }
};

const fetcher = url => axios.get(url, config).then(res => res.data)

export function getMethod(URL) {
    const { data, error } = useSWR(urls.springUrl + URL, fetcher);
    return ({ data, error });
}