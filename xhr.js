"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let respuesta = {}

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.onload = () => {
        console.log(`Estado final de la solicitud: ${xhr.readyState}`);
        console.log(`Estado de la respuesta: ${xhr.status}`);

        if (xhr.readyState == 4 && xhr.status == 200) {
            respuesta = JSON.parse(xhr.responseText);
            console.log(`Al acabar la request: ${JSON.stringify(respuesta)}`)
        }
    }

    xhr.ontimeout = () => console.log('Se ha agotado el tiempo de espera');
    xhr.onabort = () => console.log('Se ha abortado la solicitud');
    xhr.onerror = () => console.log('Ocurrió un error ¯\\_(ツ)_/¯');
    
    xhr.onreadystatechange = () => console.log(`Nuevo estado de la solicitud: ${xhr.readyState}`);
    xhr.send();

    console.log(`Despues de send: ${xhr.readyState} ${xhr.status} ${JSON.stringify(respuesta)}`)
});
