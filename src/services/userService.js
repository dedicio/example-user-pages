export function getRandomUser() {
    return fetch('https://randomuser.me/api/?nat=br')
        .then(res => res.json())
        .then(res => res.results[0])
}
