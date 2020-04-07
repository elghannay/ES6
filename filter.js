let products = [
    { name: 'carrot', type: 'vegetables', price: 5000, quantity: 2 },
    { name: 'banana', type: 'fruit', price: 100, quantity: 74 },
    { name: 'cereals', type: 'cereal', price: 0.2, quantity: 20 },
    { name: 'peach', type: 'fruit', price: 20, quantity: 0 }
];
let post = { id: 4, title: 'new york' };
let comments = [
    { postId: 4, user: 'mohamed', content: 'hello word' },
    { postId: 3, user: 'how', content: 'hello word' },
    { postId: 4, user: 'yow', content: ' hello ' }
]

// using for loops
let result = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'vegetables')
        result.push(products[i])
}
// filter
let vegetables = products.filter(product => product.type === 'vegetables' && quantity > 20);
// comments for posts
function commentsForPosts(comments, post) {
    return comments.filter(comment => {
        return comment.postId === post.id;
    })
}
console.log(commentsForPosts(comments, post));