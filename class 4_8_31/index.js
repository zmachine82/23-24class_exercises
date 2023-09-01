// declare html elements
const addListButton = document.getElementById('addListButton')
const newListInput = document.getElementById('new-list')
const listContainer = document.querySelector('.list-item-container')
const mainContent = document.getElementById('main-content')

const lists = []




// attach listeners
addListButton.addEventListener('click', onAddListButtonClicked)






// functions that do things
function onAddListButtonClicked() {
    lists.push({listName: newListInput.value, todos: []})


    createListElements(lists)
    
    newListInput.value = ''
}









function createListElements(listsToShow) {
    listContainer.innerHTML = '';

    for (const list of listsToShow) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('list-item')

        const newH4 = document.createElement('h4')
        newH4.textContent = list.listName

        newDiv.appendChild(newH4)

        listContainer.appendChild(newDiv)
        newDiv.addEventListener('click', () => {
            onListClicked(list)
        })
    }

    
}

function onListClicked(list) {
    const newH2 = document.createElement('h2')

    newH2.textContent = list.listName
  
    console.log(list)
    mainContent.innerHTML = ''
    
    mainContent.appendChild(newH2)

    const newInputDiv = document.createElement('div')
    const newInput = document.createElement('input')
    newInput.id = 'newTodoInput'
    const newSubmitButton = document.createElement('button')
    newSubmitButton.textContent = 'Add new Todo'
    newSubmitButton.id = 'newSubmitButton'

    newSubmitButton.addEventListener('click', () => {
        onTodoSubmitted()
    })

    newInputDiv.appendChild(newInput)
    newInputDiv.appendChild(newSubmitButton)
    mainContent.appendChild(newInputDiv)
}

function onTodoSubmitted() {
    console.log(lists)
}