
let promise = fetch("http://jsonplaceholder.typicode.com/users/1");

console.log(promise);

promise.then(function processResponse(response) {
    console.log(response.status, response.statusText);
    return response.json();
}).then(function(data) {
    console.log(data);
})