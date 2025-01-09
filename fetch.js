"use strict"

let respuesta = {}

console.log(`Antes de fetch: ${JSON.stringify(respuesta)}`)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => {
    respuesta = json;
    console.log(`Al acabar la request: ${JSON.stringify(respuesta)}`)
});

setTimeout(() => {
    console.log(`Al acabar el contador: ${JSON.stringify(respuesta)}`)
}, 5);

console.log(`Despues de fetch: ${JSON.stringify(respuesta)}`)
