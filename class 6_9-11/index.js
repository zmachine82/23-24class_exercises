 import { ButtonCounter, RandomButtonCounter } from "./button-classes.js";
  
  // get reference to html elements we care about
  const redButton = new ButtonCounter('red')
  const blueButton = new ButtonCounter('blue')
  const greenButton = new ButtonCounter('green')
  const randomButton = new RandomButtonCounter('random')

  setInterval(() => {
    const totalCount = redButton.count + blueButton.count + greenButton.count + randomButton.count
    document.getElementById('totalCount').innerText = totalCount
  }, 50)