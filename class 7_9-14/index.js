const lists = []

class Sidebar {
    constructor(mainContent) {
        this.addListButton = document.getElementById('addListButton')
        this.newListInput = document.getElementById('new-list')
        this.listContainer = document.querySelector('.list-item-container')
        addListButton.addEventListener('click', () => this.onAddListButtonClicked())
        this.mainContent = mainContent

        console.log(this.newListInput)
    }

    onAddListButtonClicked() {
        lists.push(new TodoList(this.newListInput.value))
    
        this.createListElements(lists)
        
        this.newListInput.value = ''
    }

    createListElements(listsToShow) {
        this.listContainer.innerHTML = '';
    
        for (const list of listsToShow) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('list-item')
    
            const newH4 = document.createElement('h4')
            newH4.textContent = list.listName
    
            newDiv.appendChild(newH4)
    
            this.listContainer.appendChild(newDiv)
            newDiv.addEventListener('click', () => {
                this.onListClicked(list)
            })
        }
    
        
    }

    onListClicked(list) {
        this.mainContent.displayTodoListData(list)
    }
}

class MainContent {

    constructor() {
        this.mainContent = document.getElementById('main-content')
    }

    displayTodoListData(todoList) {
        const newH2 = document.createElement('h2')
    
        newH2.textContent = todoList.listName
      
        console.log(todoList)
        this.mainContent.innerHTML = ''
        
        this.mainContent.appendChild(newH2)
    
        const newInputDiv = document.createElement('div')
        const newInput = document.createElement('input')
        newInput.id = 'newTodoInput'
        const newSubmitButton = document.createElement('button')
        newSubmitButton.textContent = 'Add new Todo'
        newSubmitButton.id = 'newSubmitButton'
    
        newSubmitButton.addEventListener('click', () => {
            this.onTodoSubmitted(newInput.value, todoList)
        })
    
        newInputDiv.appendChild(newInput)
        newInputDiv.appendChild(newSubmitButton)
        this.mainContent.appendChild(newInputDiv)
    
        const todoArea = document.createElement('div')
        todoArea.id = 'todoArea'
    
        this.mainContent.appendChild(todoArea)
        this.updateTodosOnScreen(todoList.todos)
    }

    onTodoSubmitted(newTodoData, list) {
        list.addTodo(new Todo(newTodoData))
    
        this.updateTodosOnScreen(list.todos)
    }

    updateTodosOnScreen(todos) {
        const todoArea = document.querySelector('#todoArea')
    
        todoArea.innerHTML = ''
    
        for (const todo of todos) {
            const todoText = document.createElement('span')
            todoText.innerText = todo.todoItem
    
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.checked = todo.completed
            checkbox.addEventListener('change', () => {
                todo.toggleCompletedStatus()
            })
    
            const todoDiv = document.createElement('div')
            todoDiv.appendChild(checkbox)
            todoDiv.appendChild(todoText)
    
            todoArea.appendChild(todoDiv)
        }
        
    }
}




class TodoList {
    constructor(name, todos = []) {
        this.listName = name
        this.todos = todos
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
}

class Todo {

    constructor(todoItem, completed = false) {
        this.todoItem = todoItem;
        this.completed = completed
    }

    toggleCompletedStatus() {
        this.completed = !this.completed
    }
}




const mainContent = new MainContent()
const sidebar = new Sidebar(mainContent)



