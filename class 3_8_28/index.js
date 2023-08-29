

// const correctAnswer = randomNumber1and100()
const correctAnswer = 12

const button = document.querySelector('button')
const input = document.querySelector('#userInput')
const messages = document.querySelector('#messages')

button.addEventListener('click', () => {
    console.log('here is the input', input.value)
    let guess = input.value
    console.log(guess)

    if (guess == correctAnswer) {
        const newPTag = document.createElement('p')
        newPTag.innerText = "you won!"
        messages.appendChild(newPTag)
        button.disabled = true
    } 
    else {
        const isGuessBigger = guess > correctAnswer

        if (isGuessBigger) {
            const newPTag = document.createElement('p')
            newPTag.innerText = "you guessed too high, pick a number less than " + guess
            messages.appendChild(newPTag)
        } else {
            const newPTag = document.createElement('p')
            newPTag.innerText = "you guessed too low, pick a number greater than " + guess
            messages.appendChild(newPTag)

        }
    }

})


function randomNumber1and100() {
    return Math.floor(Math.random() * 100) + 1
}