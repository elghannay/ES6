// an async function is a function that returns a promise. 
// using the async await is just syntactic sugar for 
// writing asynchronous code in a synchronous format.
async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        throw 'the parameters are not numbers';
    return x + y;
}
// a horrendous version that achieve the same result

function add(x, y) {
    return Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject('X and Y must be numbers!');
        }
        resolve(x + y);
    })
}

add(6, 7)
    .then((val) => {
        console.log('PROMISE RESOLVED WITH: ', val);
    })
    .catch((err) => {
        console.log('PROMISE REJECTED WITH: ', err);
    });

// =============== using error handling with async await ==============//

const urls = [
    'https://pokeapi.co/api/v2/users',
    'https://pokeapi.co/api/v2/pokemon/posts',
    'https://pokeapi.co/api/v2/pokemon/photos'
]

Promise.all(urls.map(url =>
    fetch(url)
        .then(res.json())
        .then(array => {
            console.log(array[0]);
            console.log(array[1]);
            console.log(array[2]);
        }
        )
        .catch(e => console.log(e))
))

// handling errors with catch: a classic solution is to use try catch blocks.
// but we can also use it as asynchronous().catch(console.log) again the function below
//  catch any error that may occur in the function.

// try catch block catch errors only when working with synchronous code, 
// but since we are using the async it works just fine.
const asynchronous = async function () {
    try {
        const [users, posts, photos] = await Promise.all(urls.map(url => fetch(url).then(res.json())))

        const [users, posts, photos] = await Promise.all(urls.map(url => {
            const response = await fetch(url);
            return response.json();
        }))

        console.log(users);
        console.log(posts);
        console.log(photos);
    }
    catch (err) {
        console.log('ooops', err);
    }
}

//  a more elegant solution is to use await for of loop.

const getData = async function () {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}

// ============== parallel, sequential and race =============== //
// output 2 will wait until output 1 resolves and so on. we pause execution. 
async function sequential() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();

    return `sequential execution : ${output1} ${output2} ${output3}`
}



async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);

    return `parallel execution : ${output1} ${output2} ${output3}`
}