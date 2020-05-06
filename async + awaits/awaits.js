// ONE OPTION FOR ERROR HANDLING...
async function getPlanets() {
    //Invalid URL... using the await keyword will substitute the use of .then()
    // axios.get('https://swapi.co/api/planeklsajdalksts/'); return a promise 
    // and we store the returned value (resolved or rejected) from that promise in 'res'
    const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
    console.log(res.data); // but for error handling we need a workaround
}
/*this works as a backup for handling multiple errors for */
getPlanets().catch((err) => {
    console.log('IN CATCH!!!');
    console.log(err);
});

// ANOTHER OPTION... for handling errors
// the try catch block catch errors only for this function
async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
        console.log(res.data);
    } catch (e) {
        console.log('IN CATCH!', e);
    }
}
getPlanets();

// *******************************************
//      sequential and parallel requests
// *******************************************

s
// SEQUENTIAL REQUESTS!
/* we don't want to make the first request and wait until it resolves to make another one */
// we should send the request at the same time and then wait for the response not the opposite
async function get3PokemonSequential() {
    // poke1 in this case is a result of the promise;
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

// PARALLEL REQUESTS!
async function get3Pokemon() {
    // prom1 in this case is a Promise;
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const poke1 = await prom1;
    // we are awaiting for the resolve value, then we store in poke
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}


// PARALLEL REQUESTS! a cleaner way of doing it
async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const result = Promise.all([prom1, prom2, prom3]);
    // the promise.all() will return the responses values and run only after all the promises are resolved
    for (const pokemon of result) {
        console.log(pokemon.data.name);
    }
}

get3Pokemon();

// *******************************************
// A better demonstration of the difference...
// *******************************************
function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

// IN SEQUENCE
async function lightShow() {
    await changeBodyColor('teal', 1000);
    await changeBodyColor('pink', 1000);
    await changeBodyColor('indigo', 1000);
    await changeBodyColor('violet', 1000);
}
// IN PARALLEL...
// Everything is "sent off" at the same time
async function lightShow() {
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('indigo', 1000);
    const p4 = changeBodyColor('violet', 1000);
    await p1;
    await p2;
    await p3;
    await p4;
}

lightShow();
