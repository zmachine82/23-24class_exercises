const jokeButton = document.querySelector('#nextJoke')
const favoriteButton = document.querySelector('#favorite')
const jokeText = document.querySelector('.joke')
const favoritesContainer = document.getElementById('favorites')

jokeButton.addEventListener('click', () => {

    const headers = new Headers()
    headers.append('Accept', 'application/json')

    fetch('https://icanhazdadjoke.com/', {
        headers: headers
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        jokeText.innerHTML = `<p>${res.joke}</p>`
    })
})

favoriteButton.addEventListener('click', () => {
    if(jokeText.firstChild) {
        const currentJokes = getStoredFaves()
        currentJokes.push(jokeText.firstChild.innerText)
        localStorage.setItem('favs', JSON.stringify(currentJokes))
        
        favoritesContainer.appendChild(jokeText.firstChild)
    }
})

getStoredFaves().forEach(fav => {
    const newHtml = `<p>${fav}</p>`
    favoritesContainer.innerHTML += newHtml
})



function getStoredFaves() {
    return JSON.parse(localStorage.getItem('favs')) || [];
}