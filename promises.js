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
// from the server more precisely code 404, so the only way we get that code is when we fail to reach the server


const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        console.log('elright', elRight);
        const currLeft = element.getBoundingClientRect().left;
        console.log('elLeft', currLeft);
        if (elRight + amount > bodyBoundary) {
            onFailure();
        }
        else {
            console.log(element.style.transform);
            element.style.transform = `translateX(${currLeft + amount}px)`;
            // we added the current left so the button element can change it inline style  
            onSuccess();
        }
    }, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
    btn,
    300,
    1000,
    () => {
        //success callback
        moveX(
            btn,
            300,
            1000,
            () => {
                //success callback
                moveX(
                    btn,
                    300,
                    1000,
                    () => {
                        //success callback
                        moveX(
                            btn,
                            300,
                            1000,
                            () => {
                                //success callback
                                moveX(
                                    btn,
                                    300,
                                    1000,
                                    () => {
                                        //success callback
                                        alert('YOU HAVE A WIDE SCREEN!');
                                    },
                                    () => {
                                        //failure callback
                                        alert('CANNOT MOVE FURTHER!');
                                    }
                                );
                            },
                            () => {
                                //failure callback
                                alert('CANNOT MOVE FURTHER!');
                            }
                        );
                    },
                    () => {
                        //failure callback
                        alert('CANNOT MOVE FURTHER!');
                    }
                );
            },
            () => {
                //failure callback
                alert('CANNOT MOVE FURTHER!');
            }
        );
    },
    () => {
        //failure callback
        alert('CANNOT MOVE FURTHER!');
    }
);


