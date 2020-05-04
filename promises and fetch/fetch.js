fetch('https://swapi.co/api/planetsuy21/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        // response json() return a promise that convert the data stream to js objectD
        response.json().then((data) => {
            for (let planet of data.results) {
                console.log(planet.name);
            }
        });
    })
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

// improvement 1  wrong api point

fetch('https://swapi.co/api/planetsuy21/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        // since json() returns a promise that why we can use on it a then()
        return response.json();
    }).then((data) => {
        for (let planet of data.results) {
            console.log(planet.name);
        }
    }).catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

// correct api point


fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        return response.json();
    }).then((data) => {
        for (let planet of data.results) {
            console.log(planet.name);
        }
    }).catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    })





fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log('data', data);
        console.log('/n');
        console.log('FETCHED ALL PLANETS (first 10)');
        const filmURL = data.results[0].films[0];
        return fetch(filmURL);
    })
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json();
    })
    .then((data) => {
        console.log('FETCHED FIRST FILM, based off of first planet');
        console.log(data.title);
    })
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

// fetching the next 10 planets

fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        return response.json();
    })
    .then((data) => {
        for (const planet of data.results) {
            console.log(planet.name);
        }

        const filmURL = data.next;
        return fetch(filmURL);
    })
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json();
    })
    .then((data) => {
        console.log('planets on page 2');
        for (const planet of data.results) {
            console.log(planet.name);
        }
    })
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

// a refactored solution

var checkStatus = (response) => {
    if (!response.ok)
        throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
}

var printPlanets = (data) => {
    console.log("printing 10 more planets");
    for (const planet of data.results) {
        console.log(planet.name);
    }
    // return new Promise((resolve, reject) => {
    //     resolve(data);
    //     // adding the data argument is crucial for the then() TO work
    // })
    return Promise.resolve(data.next)
}
const getNextPlanet = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
}


getNextPlanet()
    .then(checkStatus)
    .then(printPlanets)
    .then(getNextPlanet)
    .then(checkStatus)
    .then(printPlanets)
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

