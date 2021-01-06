const baseUrl = 'https://swapi.dev/api/starships'

export function getShipList() {
    return fetch(`${baseUrl}`)
    .then(res => res.json)
}