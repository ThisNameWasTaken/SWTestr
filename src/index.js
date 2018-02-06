// registerSW();

let jokesContainer = document.getElementById('jokes');
console.log(jokesContainer);

jokesContainer.innerHTML = '';
for (let i = 0; i < 10; i++) {
    fetchJoke().then(joke => jokesContainer.innerHTML += `<div class="card">${joke}</div>`);
}

function fetchJoke() {
    return new Promise(
        (resolve, reject) => fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(response => resolve(response.value))
    );
}

// function registerSW() {
//     if (!navigator.serviceWorker) return;

//     navigator.serviceWorker.register('/sw.js')
//         .then(() => console.log('sw registered'))
//         .catch(() => console.log('failed to register the sw'));
// }