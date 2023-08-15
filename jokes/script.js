const jokeEl = document.querySelector('#jokeId');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    getJoke();
})



window.addEventListener("load", () => {
    getJoke()
});


const getJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const jokes = await response.json();

    jokeEl.innerHTML = jokes.joke;

}


