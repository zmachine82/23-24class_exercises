export class Category {
  constructor(category, choices) {
    this.category = category;
    this.choices = choices;
    this.locked = false;
    this.frag = document.createDocumentFragment()
    
  }

  render() {
    const div = document.createElement('div')

    const h3 = document.createElement('h3')
    h3.textContent = this.category
    h3.classList.add('category')
    div.appendChild(h3)

    const p = document.createElement('p')
    p.textContent = this.selectedChoice
    p.classList.add('category-display')

    div.appendChild(p)

    const button = document.createElement('button')
    button.classList.add('lock')
    button.addEventListener('click', () => {
        this.locked = !this.locked
    })
    button.textContent = this.locked ? "Unlock" : "Lock"


    this.frag.appendChild(div)
    document.querySelector('.categories').appendChild(frag)
  }

  randomize() {
    if(this.locked) {
        return
    }
    const randomIndex = Math.floor(Math.random() * this.choices.length);

    this.selectedChoice = this.choices[randomIndex];
  }
}
