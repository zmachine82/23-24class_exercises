import { PersonFactory } from "./person.js";
import { ExperimentFactory } from "./experiments.js";

const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const button = document.querySelector('button')
const currentlySelected = document.getElementById('currentlySelected')
let experiment = '';

document.querySelectorAll('.experiment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        experiment = ExperimentFactory.create(btn.innerText)
        currentlySelected.innerText = btn.innerText
    })
})

button.addEventListener('click', () => {
    const person = PersonFactory.create(nameInput.value, ageInput.value)

    person.greet()
    if (person.eligibleForExperiment(experiment)) {
        console.log('performing experiment')
        experiment.perform(person)
    } else {
        console.log(`${person.name} is not eligible for experiment`)
    }

})