const API_KEY = ""

export function fetchImages(searchValue) {
    const url = ``
    return fetch(url).then(res => res.json()).then(res => res.hits)
}