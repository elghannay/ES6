const printNextPlanets = ({ data }) => {
    for (const planet of data.results) {
        console.log(planet.name);
    }
    return axios.get(data.next);
}


axios.get('https://swapi.dev/api/planets')
    .then(printNextPlanets)
    .then(printNextPlanets)
    .catch(err => console.log('an error'))