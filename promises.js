promise = new Promise((resolve, reject) => { resolve() });

promise
    .then(() => console.log('hooray i have been executed'))
    .then(() => console.log('hooray'))
    .catch(() => console.log('oh no'));

/****************** simulate a long running process ******************/

promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 3000);
})

promise
    .then(() => console.log('hooray i have been executed'))
    .then(() => console.log('hooray'))
    .catch(() => console.log('oh no'));

/****************** using fetch to make request to  ******************/
const url = "https://www.google.com";
fetch(url)
    .then(response => response.json()) // convert the data that we get from the server to a json format
    .then(data => console.log(data));


/****************** the short comings of the fetch api ******************/

const url = "https://www.google.com";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log('ok', error));

// the problem with the fetch is that the catch does not execute when we receive a bad response
// from the server more precisely code 404, so the only way we reach that code is when we fait to reach the server




