"use strict"

document.addEventListener('DOMContentLoaded', async () => {
    console.log(`Antes de fetch: ${JSON.stringify(respuesta)}`)

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(`Estado de la respuesta: ${response.status}`);

    const json = await response.json();
    console.log(`Al acabar la request: ${JSON.stringify(respuesta)}`)

    setTimeout(() => console.log(`Al acabar el contador: ${JSON.stringify(respuesta)}`), 5);
    console.log(`Tras establecer el contador: ${JSON.stringify(respuesta)}`)
});
