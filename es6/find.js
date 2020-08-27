let comments = [
    { postId: 4, user: 'mohamed', content: 'hello word' },
    { postId: 3, user: 'how', content: 'hello word' },
    { postId: 4, user: 'yow', content: ' hello ' }
];

// the iterator function should return true or false and 
// and store the data that satisfy the comparison
let result = comments.find(comment => comment.postId === 4);
console.log(result);

function findIt(comments) {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].postId === 4) {
            console.log(comments[i]);
        }
    }
}
findIt(comments);