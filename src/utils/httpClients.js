const URLAPI = process.env.REACT_APP_URL_API
const API_TOKEN = process.env.REACT_APP_API_TOKEN

export function get(path) {
    return fetch(URLAPI + path, {
        headers: {
            Authorization:
                "Bearer " + API_TOKEN,
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(result => result.json())
}