"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let respuesta = {}

    console.log(`Antes de fetch: ${JSON.stringify(respuesta)}`)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            respuesta = json;
            console.log(`Al acabar la request: ${JSON.stringify(respuesta)}`)
        })
        .catch(error => console.log('Ocurrió un error ¯\\_(ツ)_/¯'));

    setTimeout(() => console.log(`Al acabar el contador: ${JSON.stringify(respuesta)}`), 5);
    console.log(`Despues de fetch: ${JSON.stringify(respuesta)}`)
});
