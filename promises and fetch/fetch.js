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
        console.log('response', response);
        console.log('/n');
        console.log('response.json()', response.json());
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
