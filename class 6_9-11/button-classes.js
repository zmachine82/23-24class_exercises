export class ButtonCounter {
    count = 0;
    
    constructor(htmlId) {
        this.color = htmlId
        this.buttonElement = document.getElementById(htmlId)
        this.buttonElement.addEventListener('click', () => {
            this.changeBodyColor(this.color)
            this.count++
            if(this.count > 20) {
                this.resetCount();
            }
            this.buttonElement.querySelector('span').innerText = this.count
        })
    }

    changeBodyColor() {
        document.body.style.backgroundColor = this.color
    }

    resetCount() {
        this.count = 0
    }
  }

  export class RandomButtonCounter extends ButtonCounter {
    changeBodyColor() {
        document.body.style.backgroundColor = this.randomColor()
    }

    randomColor() {
        return ['red', 'blue', 'green'][Math.floor(Math.random() * 3)]
    }

    resetCount() {
        
    }
  }