async function add(x, y) {
    if (typeof (x) !== "number" || typeof (y) !== "number")
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

